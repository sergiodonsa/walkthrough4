sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/ui/model/json/JSONModel",
//   "sap/ui/model/resource/ResourceModel"
], 
//function (UIComponent, JSONModel, ResourceModel) {
function (UIComponent, JSONModel) {
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

         /*
         // set i18n model  --->adesso è nel manifest
         var i18nModel = new ResourceModel({
            bundleName: "crmo.walkthrough2.i18n.i18n",
            supportedLocales: [""],
            fallbackLocale: ""
         });
         this.setModel(i18nModel, "i18n");
         */
      }
    });
});