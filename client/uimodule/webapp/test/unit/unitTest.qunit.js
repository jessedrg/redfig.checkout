/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"redfig/checkout/test/unit/AllTest"
	], function () {
		QUnit.start();
	});
});