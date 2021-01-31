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
			    var oView = this.getView();
			    // create dialog lazily
			    if (!this.pDialog) {
				    this.pDialog = Fragment.load({
					    id: oView.getId(),
                        name: "crmo.walkthrough4.view.ViewHelloDialogF",
                        controller: this
				    }).then(function (oDialog) {
					// connect dialog to the root view of this component (models, lifecycle)
					oView.addDependent(oDialog);
					return oDialog;
				    });
			    } 
			    this.pDialog.then(function(oDialog) {
				    oDialog.open();
			    });
            },
        
		    onCloseDialog : function () {
			    // note: We don't need to chain to the pDialog promise, since this event-handler
			    // is only called from within the loaded dialog itself.
			    this.byId("helloDialog").close();
		    }            

		});
	});