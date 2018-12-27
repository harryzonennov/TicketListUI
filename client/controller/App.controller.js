sap.ui.define([
        "Ticket/controller/BaseController",
        "sap/ui/model/json/JSONModel",
        "sap/m/MessageBox",
        "sap/m/MessageToast",
    ],
    function (BaseController, JSONModel, MessageBox, MessageToast) {
        "use strict";

        return BaseController.extend("Ticket.controller.App", {


            onInit: function () {
                var oViewModel,
                    fnSetAppNotBusy,
                    iOriginalBusyDelay = this.getView().getBusyIndicatorDelay();

                oViewModel = new JSONModel({
                    busy: false,
                    delay: 0
                });
                this.setModel(oViewModel, "appView");

                // apply content density mode to root view
                this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
            },


        });

    }
);