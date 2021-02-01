// @ts-ignore
sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "./controller/HelloDialogF.controller"
], 
function (UIComponent, JSONModel, HelloDialogF) {
   "use strict";

    return UIComponent.extend("crmo.walkthrough4.Component", {

      metadata : {
            manifest: "json"
      },

        init : function () {
            // call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);
            // set data model
            var oData = {
            recipient : {
               name : "testoRecipientName"
            }
            };
            var oModel = new JSONModel(oData);
            this.setModel(oModel);

		    // set dialog
		    this._helloDialogF = new HelloDialogF(this.getRootControl());
		},

		exit : function() {
			this._helloDialogF.destroy();
			delete this._helloDialogF;
		},

		openHelloDialog : function () {
			this._helloDialogF.open();
      }
    });
});