const express = require('express');
const path = require('path')
const dotenv = require('dotenv')
const {v4} = require('uuid')
var cors = require('cors')
const {Client,Config,CheckoutAPI} = require("@adyen/api-library");
const { BrowserInfo } = require('@adyen/api-library/lib/src/typings/checkout/browserInfo');


const app = express();

app.use(cors())
app.use(function(request,response,next){
    response.setHeader('Access-Control-Allow-Origin','*');
    next();
});
app.use(express.json())
app.use(express.urlencoded({extend:true}))

const config = new Config();
config.apiKey = process.env.API_KEY;
const client = new Client({config});
client.setEnvironment("TEST")
const checkout = new CheckoutAPI(client)
const paymentDataStore = {};

const PORT = process.env.PORT || 6000;
//Get payment methods
const paymenDataStore = {};

app.get('/',async(req,res)=>{
    try{
        const response = await checkout.paymentMethods({
            channel:"Web",
            merchantAccount: process.env.MERCHANT_ACCOUNT
        })
        res.json({
            clientKey:process.env.CLIENT_KEY,
            response
        })

    }
    catch(e){
        console.log(e)

    }
})
 
app.post("/api/initiatePayment", async (req, res) => {
  try {
    // unique ref for the transaction
    const orderRef = v4();
  
    // Ideally the data passed here should be computed based on business logic
    const response = await checkout.payments({
      amount: { currency: "EUR", value: req.body.value }, // value is 10€ in minor units
      reference: orderRef, // required
      merchantAccount: process.env.MERCHANT_ACCOUNT, // required
      channel: "Web", // required
      additionalData:{
        allow3DS2: true

      },
      // we pass the orderRef in return URL to get paymentData during redirects
      returnUrl: `http://localhost:8080/api/handleShopperRedirect?orderRef=${orderRef}`, // required for redirect flow
      browserInfo: req.body.browserInfo,
      paymentMethod: req.body.paymentMethod // required
    });
 
    const { action } = response;
 
    if (action) {
      paymentDataStore[orderRef] = action.paymentData;
    }
    res.json(response);
  } catch (err) {
    console.error(`Error: ${err.message}, error code: ${err.errorCode}`);
    res.status(err.statusCode).json(err.message);
  }
});
app.post("/api/submitAdditionalDetails", async (req, res) => {
    // Create the payload for submitting payment details
    const payload = {
      details: req.body.details,
      paymentData: req.body.paymentData,
    };
   
    try {
      // Return the response back to client (for further action handling or presenting result to shopper)
      const response = await checkout.paymentsDetails(payload);
      res.json(response);
    } catch (err) {
      console.error(`Error: ${err.message}, error code: ${err.errorCode}`);
      res.status(err.statusCode).json(err.message);
    }
  });
  app.all("/api/handleShopperRedirect", async (req, res) => {
    // Create the payload for submitting payment details
    const orderRef = req.query.orderRef;
    const redirect = req.method === "GET" ? req.query : req.body;
    const details = {};
    if (redirect.redirectResult) {
      details.redirectResult = redirect.redirectResult;
    } else {
      details.MD = redirect.MD;
      details.PaRes = redirect.PaRes;
    }
   
    const payload = {
      details,
      paymentData: paymentDataStore[orderRef],
    };
   
    try {
      const response = await checkout.paymentsDetails(payload);

      switch (response.resultCode) {
        case "Authorised":
          res.send({routin:"/result/success"});
          break;
        case "Pending":
        case "Received":
          res.send({routing:"/result/pending"});
          break;
        case "Refused":
          res.send({routing:"/result/failed"});
          break;
        default:
          res.send({routing:"/result/error"});
          break;
      }
    } catch (err) {
      console.error(`Error: ${err.message}, error code: ${err.errorCode}`);
          res.send({routing:"/result/error"});
    }
  });
  

app.listen(PORT,()=>{
    console.log(`server started on port: ${PORT}`)
})