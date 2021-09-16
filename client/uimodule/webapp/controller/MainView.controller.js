sap.ui.define(
  [
    "redfig/checkout/controller/BaseController",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/mvc/Controller",
  ],
  function (Controller, JSONModel, MessageToast) {
    "use strict";

    return Controller.extend("redfig.checkout.controller.MainView", {
      handleOnChange: function (state, component) {
        state.isValid; // True or false. Specifies if all the information that the shopper provided is valid.
        state.data; // Provides the data that you need to pass in the `/payments` call.
        component;
        // Provides the active component instance that called this event.
      },
      handleOnAdditionalDetails: function (state, component) {
        state.data; // Provides the data that you need to pass in the `/payments/details` call.
        component; // Provides the active component instance that called this event.
      },

      onInit: function () {
        this.getView().setModel("dummieModel");
        const products = this.getOwnerComponent()
          .getModel("productModel")
          .getProperty("/products");
        let totalPrice = 0;
        products.map((product) => {
          totalPrice = totalPrice + parseInt(product.price);
        });
        const productsModel = {
          products,
          totalPrice,
        };

        const oModel = new JSONModel();
        oModel.setData(productsModel);
        this.getView().setModel(oModel, "productDisplay");

        //set input for the form
        const formModel = {
          street: "",
          street_number: "",
          postalCode: "",
          country: "",
          City: "",
          phone: "",
        };
        const oFormModel = new JSONModel();
        oFormModel.setData(formModel);
        this.byId("formDirection").setModel(oFormModel, "getForm");
      },
      onNext: function (oEvent) {
        const path = oEvent
          .getSource()
          .getBindingContext("dummieModel")
          .getPath();
        const direction = this.getView()
          .getModel("dummieModel")
          .getProperty(path);
        console.log(direction);
        this.byId("wizard1").setNextStep(this.getView().byId("ProductDisplay"));
        this.byId("checkoutWizard").nextStep(
          this.getView().byId("ProductDisplay")
        );
        console.log(direction);
        const oModel = new JSONModel();
        const selectedDirection = direction;
        oModel.setData(selectedDirection);
        this.getView().setModel(oModel, "selectedDirection");
      },
      handleDelete: function (oEvent) {
        const path = oEvent
          .getParameter("listItem")
          .getBindingContext("productDisplay")
          .getPath();
        const model = this.getView()
          .getModel("productDisplay")
          .getProperty("/");
        const splited = path.split("/");
        const number = parseInt(splited[2]);
        const seletedProduct = model.products.splice(number, 1);
        let totalPrice2 = 0;
        const totalPrice1 = model.products.map((product) => {
          totalPrice2 = totalPrice2 + parseInt(product.price);
        });
        const newModel = {
          products: model.products,
          totalPrice: totalPrice2,
        };
        const oModel = new JSONModel();
        oModel.setData(newModel);
        this.getView().setModel(oModel, "productDisplay");

        console.log(newModel);
      },
      onPreb: function () {
        if (this.getView().byId("checkoutWizard").getProgress() === 3) {
          this.getView().byId("checkoutWizard").previousStep().previousStep();
        }
        this.getView()
          .byId("checkoutWizard")
          .previousStep(this.getView().byId("NewDirection"));
      },
      deleteDirection: function (oEvent) {
        const path = oEvent
          .getSource()
          .getBindingContext("dummieModel")
          .getPath();
        const directions = this.getView()
          .getModel("dummieModel")
          .getProperty("/");
        const number = path.split("/")[2];
        directions.directions.splice(number, 1);
        const oModel = new JSONModel();
        oModel.setData(directions);
        this.getView().setModel(oModel, "dummieModel");
      },
      showSide: function () {
        if (this.getView().byId("checkoutWizard").getProgress() !== 1) {
          return alert("Please select another direction");
        }
        console.log(this.getView().byId("checkoutWizard").getProgress());
        this.byId("wizard1").setNextStep(this.getView().byId("NewDirection"));
        this.byId("checkoutWizard").nextStep();
        this.getView().byId("NewDirection");
      },
      saveDirection: function () {
        const form = this.byId("formDirection")
          .getModel("getForm")
          .getProperty("/");
        console.log(form.City);
        if (
          form.City === "" ||
          form.country === "" ||
          form.phone === "" ||
          form.street_number === "" ||
          form.postalCode === "" ||
          form.street === ""
        ) {
          return alert("Pleace enter all the fields");
        }
        const formdirection = {
          City: form.City,
          country: form.country,
          phone: form.phone,
          street_number: form.street_number,
          postalCode: form.postalCode,
          street: form.street,
        };
        const newDummie = this.getView()
          .getModel("dummieModel")
          .getProperty("/directions");
        newDummie.push(formdirection);
        const oModel = new JSONModel();
        const newModel = {
          directions: newDummie,
        };
        oModel.setData(newModel);
        this.getView().setModel(oModel, "dummieModel");
        this.getView().byId("checkoutWizard").previousStep();
      },
      withOutSaving: function () {
        const form = this.byId("formDirection")
          .getModel("getForm")
          .getProperty("/");

        if (
          form.City === "" ||
          form.country === "" ||
          form.phone === "  " ||
          form.street_number === "" ||
          form.postalCode === "" ||
          form.street === ""
        ) {
          return alert("Pleace enter all the fields");
        }

        let formdirection = {
          City: form.City,
          country: form.country,
          phone: form.phone,
          street_number: form.street_number,
          postalCode: form.postalCode,
          street: form.street,
        };
        const oModel = new JSONModel();
        oModel.setData(formdirection);
        this.getView().setModel(oModel, "selectedDirection");

        this.byId("checkoutWizard").nextStep(
          this.getView().byId("NotSaveProductDisplay")
        );
      },
      cancelButton: function () {
        this.getView().byId("checkoutWizard").previousStep();
      },
      printHello: function () {
        console.log("hey");
      },
      //ALL RELATED WITH ADYEN
      callServer: async function (url, data1) {
        console.log("hey")
        let res;
        if (data1 === undefined) {
          res = await $.get(url);
          return await res;
        }
        res = await $.ajax({
          type: "POST",
          url:url,
          data: data1 ? data1 : "",
         
        });
        console.log(data1)
        console.log(res)
        return await res;
      },
      handleServerResponse: async function (res, component) {
        
        const oRouter = this.getOwnerComponent().getRouter();
        if (res.action) {
          component.handleAction(res.action);
        } else {
          switch (res.resultCode) {
            case "Authorised":
              oRouter.navTo("Authorised")
              break;
            case "Pending":
            case "Received":
              oRouter.navTo("recieved")
              break;
            case "Refused":
              oRouter.navTo("refused")
              break;
            default:
              oRouter.navTo("refused")
              break;
          }
        }
      },
      handleSubmission: async function (state, component, url) {
        try {
          const res = await this.callServer(url, state.data);
          this.handleServerResponse(res, component);
        } catch (error) {
          console.error(error);
        }
      },
      
      checkoutStep: async function () {
        const paymentMethodsResponse = await this.callServer(
          "/srv"
        );
      
        
        const totalPrice = this.getView()
          .getModel("productDisplay")
          .getProperty("/totalPrice");

        const configuration = {
          locale: "en_US",
          environment: "test",
          originKey:
            "pub.v2.8216306547650999.qSETSluuEbzxIcJgvDFtS3O3Z4OnfJvMNKPNHmfnTKs",
          clientKey: "test_BLTPOLJQAJE4NJWMNFZI2DDLF4JFI2UC",
          amount: {
            value: totalPrice * 100,
            currency: "EUR",
          },
          paymentMethodsResponse: paymentMethodsResponse.response,
          onSubmit: (state, component) => {
            if (state.isValid) {
              
              this.handleSubmission(
                state,
                component,
                "/initiatePayment"
              );
            }
          },
          onAdditionalDetails: (state, component) => {
            this.handleSubmission(
              state,
              component,
              "/submitAdditionalDetails"
            );
          },
        };

        const checkout = await new AdyenCheckout(configuration);
        const id = this.byId("paymentMethod").sId;

        const card = checkout.create("dropin").mount(`#${id}`);
        console.log(this.getView().byId("paymentMethod"));
        this.byId("checkoutWizard").nextStep(
          this.getView().byId("PaymentMethod")
        );
      },
      //Function for handling UI of Adym

      adym: function () {},
      handleOnAdditionalDetails: function (state, component) {},
      handleOnChange: function (state, component) {},
      //ALl tests Are here
     totalPrice: function(value){
      const products = this.getView()
      .getModel("productModel")
      .getProperty("/products");
      products.push({
        product:"tes",
            description:"test",
            img:"https://test.com",
            price: value
      })
      let totalPrice;
      products.map((product) => {
        totalPrice = totalPrice + parseInt(product.price);
      });

      return totalPrice
      console.log(totalPrice)



    
     }
    });
  },
  
);
