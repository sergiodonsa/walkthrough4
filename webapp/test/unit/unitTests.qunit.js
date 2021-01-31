/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"crmo/walkthrough4/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
