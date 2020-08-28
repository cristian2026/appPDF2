/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"appPDF/appPDF/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});