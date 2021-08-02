/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/ey/demoapp5html/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});