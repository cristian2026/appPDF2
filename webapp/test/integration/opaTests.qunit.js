/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"appPDF/appPDF/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});