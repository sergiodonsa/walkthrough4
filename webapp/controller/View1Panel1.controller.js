// @ts-ignore
sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageToast",
        "sap/ui/core/Fragment"
    ],

	function (Controller, MessageToast, Fragment) {
		"use strict";
		return Controller.extend("crmo.walkthrough4.controller.View1Panel1", {
         
            onShowHello : function () {
                //  alert("Hello World");
                // @ts-ignore
                var  oBundle = this.getView().getModel("i18n").getResourceBundle();
                if (oBundle)
                // @ts-ignore
                //oBundle = oBundle.getResourceBundle();
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");    
                // @ts-ignore
                var sMsg = oBundle.getText("helloMsg", [sRecipient]);
                MessageToast.show(sMsg)
            },
        
		onOpenDialog : function () {
			this.getOwnerComponent().openHelloDialog();
		}           

		});
	});