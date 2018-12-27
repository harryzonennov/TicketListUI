sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/core/routing/History",
        "Ticket/controller/UtilityHandler",
    ], function (Controller, History, UtilityHandler) {
        "use strict";

        return Controller.extend("Ticket.controller.BaseController", {

            onInit: function() {

            },

            /**
             * Convenience method for accessing the router in every controller of the application.
             * @public
             * @returns {sap.ui.core.routing.Router} the router for this component
             */
            getRouter: function () {
                return this.getOwnerComponent().getRouter();
            },

            /**
             * Convenience method for getting the view model by name in every controller of the application.
             * @public
             * @param {string} sName the model name
             * @returns {sap.ui.model.Model} the model instance
             */
            getModel: function (sName) {
                return this.getView().getModel(sName);
            },

            /**
             * Convenience method for setting the view model in every controller of the application.
             * @public
             * @param {sap.ui.model.Model} oModel the model instance
             * @param {string} sName the model name
             * @returns {sap.ui.mvc.View} the view instance
             */
            setModel: function (oModel, sName) {
                return this.getView().setModel(oModel, sName);
            },

            /**
             * Convenience method for getting the resource bundle.
             * @public
             * @returns {sap.ui.model.resource.ResourceModel} the resourceModel of the component
             */
            getResourceBundle: function () {
                return this.getOwnerComponent().getModel("i18n").getResourceBundle();
            },

            /**
             * Utility method of Getting AJAX request
             * @param {Object} oSetting: request setting
             *       ----{String} url: url of request
             *       ----{function} successCallBack: success call back method
             *       ----{function} errorCallBack: error call back method			 *
             *       ----{function} completeCallBack: complete call back method
             */
            getHttpRequest: function(oSetting){
                Ticket.controller.UtilityHandler.getHttpRequest(oSetting);
            },


            /**
             * Utility method of Getting AJAX request
             * @param {Object} oSetting: request setting
             *       ----{String} url: url of request
             *       ----{function} successCallBack: success call back method
             *       ----{function} errorCallBack: error call back method			 *
             *       ----{function} completeCallBack: complete call back method
             */
            postHttpRequest: function(oSetting){
                Ticket.controller.UtilityHandler.postHttpRequest(oSetting);
            }


        });

    }
);
