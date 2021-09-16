sap.ui.define([
	"redfig/checkout/controller/MainView.controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/base/ManagedObject",
	"sap/ui/core/mvc/Controller",
	"sap/ui/thirdparty/sinon",
	"sap/ui/thirdparty/sinon-qunit"

], function (oController,JSONModel,ManagedObject,Controller,sinon,sinonQunit) {
	"use strict";
	QUnit.module("App Controller");
    QUnit.test("I should test the app controller loads", function (assert) {
        var oMainViewController = new oController();
        var sName = oMainViewController.getMetadata().getName();
        assert.ok(sName, "redfig/checkout.controller.App");
    });
    //this is an example of a Qunit that needs to be fixed 
    QUnit.test("I should test any additional controls", function (assert) {
        assert.ok(false, "Implement test");
    });


    QUnit.module('Calculate total price')
	function totalPrice(asset,sValue,fExpected) {
		// regular init of controller
		// Act
		const oAppController = new oController();
		// regular init of a JSON model
		// regular init of a JSON model
        var oJsonModelStub = new JSONModel({​​​​​​
	      "products": []
	    }​​​​​​);
	// construct a dummy View
	   /* var oViewStub = new ManagedObject({​​​​​​}​​​​​​);
	    // regular setting of a model to a View
	    oViewStub.setModel(oJsonModelStub,"productModel");
	    // stubbing Controller.getView() to return our dummy view object
	    var oGetViewStub = sinon.stub(Controller.prototype, "getView").returns(oViewStub);

	    const sState = oAppController.totalPrice(sValue);
		
		asset.strictEqual(sState,fExpected,'The total sum its correct')
        oGetViewStub.restore*/
		
}
    QUnit.test("All Products total price", function (assert) {
		totalPrice.call(this,assert,12,123250+12)
		console.log('hey')
		
		
	});

	
});