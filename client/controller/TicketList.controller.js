sap.ui.define([
    "Ticket/controller/BaseController",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/Device",
    "sap/m/MessageBox",
    "sap/m/MessageToast",
    "Ticket/controller/UtilityHandler"
], function (BaseController, JSONModel, Filter, FilterOperator, Device, MessageBox, MessageToast, UtilityHandler) {
    "use strict";
    /*global $*/

    return BaseController.extend("Ticket.controller.TicketList", {

        onInit: function(){

            this.app = this.getOwnerComponent().getAggregation("rootControl");
            var listModel = new JSONModel({
                ServiceRequestCollection: []
            });

            this.utilityHandler = new Ticket.controller.UtilityHandler.getHost();
            this.setModel(listModel, "listModel");
            this.getRouter().getRoute("ticketList").attachPatternMatched(this._onPatternMatched, this);
            //this.initServiceRequestList();
        },

        _onPatternMatched: function(){



        },

        onTicketPress: function (oEvent) {
            this._showTicketDetail(oEvent.getSource());
        },

        _showTicketDetail: function(oItem){
            this.getRouter().navTo("ticketDetail", {
                objectId: oItem.getBindingContext().getProperty("ObjectID")
            });
        },

        initServiceRequestList: function () {
            this.app.setBusy(true);
            this.getServiceRequestListBackend(this.getModel("listModel"), function () {
                this.app.setBusy(false);
            }.bind(this));
        },

        getServiceRequestListBackend: function (model, fnComplete) {
            //var email = sap.ushell.Container.getUser().getEmail();
            // var url = UtilityHandler.getHost() + "/getServiceRequests?$skip=0&$top=20&$orderby=CreationDateTime desc&$filter=(ReporterEmail eq '" + email + "' or ReporterEmail eq '" + email
            //     + "') and (ServiceRequestUserLifeCycleStatusCodeText ne 'Completed' or ServiceRequestUserLifeCycleStatusCodeText ne 'Completed')&$expand=ServiceRequestDescription,ServiceRequestAttachmentFolder";

            var url = Ticket.controller.UtilityHandler.getHost() + "/Ticket";
            this.getHttpRequest({
                url: url,
                success: function (result) {
                    if (result && result.forEach) {

                        model.setData({"ServiceRequestCollection": result});
                        model.refresh();

                    } else {
                        // In case empty data
                    }
                }.bind(this),
                error: function (jqXHR) {

                    // var errorMessage = UtilityHandler.getErrorMessageFromErrorResponse(jqXHR);
                    // var error = errorMessage ? errorMessage : 'Service requests list can not be retrieved!';
                    MessageBox.error("Error!");
                }.bind(this),
                complete: function () {
                    if (fnComplete) {
                        fnComplete();
                    }
                }.bind(this)
            });
            this.setModel(model);
        },





    });
});