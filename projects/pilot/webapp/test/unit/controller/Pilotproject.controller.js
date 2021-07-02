/*global QUnit*/

sap.ui.define([
	"pilot/controller/Pilotproject.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Pilotproject Controller");

	QUnit.test("I should test the Pilotproject controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
