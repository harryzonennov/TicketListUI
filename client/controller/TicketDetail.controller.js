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

    return BaseController.extend("Ticket.controller.TicketDetail", {

        onInit: function(){

            this.app = this.component.getAggregation("rootControl");
            var oDetailModel = new JSONModel({
                busy: false,
                delay: 0
            });
            this.setModel(oDetailModel, "detailView");
            this.getRouter().getRoute("ticketDetail").attachPatternMatched(this._onObjectMatched, this);
        },

        _onObjectMatched: function(){
            var sObjectId = oEvent.getParameter("arguments").objectId;
            if (this.getOwnerComponent().mockData) {
                var collection = this.getModel().getData().ServiceRequestCollection;
                for (var i = 0; i < collection.length; i++) {
                    if (collection[i].ObjectID === sObjectId) {
                        break;
                    }
                }
                this._bindView("/ServiceRequestCollection/" + i);
            } else {
                this.getModel().attachRequestCompleted(function(mPara) {
                    this._bindViewWithObjectId(sObjectId);
                }.bind(this));
                this._bindViewWithObjectId(sObjectId);
            }
        },


        _bindView: function(sPath){
            var oViewModel = this.getModel("detailView");
            // If the view was not bound yet its not busy, only if the binding requests data it is set to busy again
            oViewModel.setProperty("/busy", false);
            this.getView().bindElement({
                path: sPath,
                parameters: {
                    expand: "ServiceRequestDescription,ServiceRequestAttachmentFolder"
                },
                events: {
                    //change: this._onBindingViewChange.bind(this),
                    dataRequested: function() {
                        oViewModel.setProperty("/busy", true);
                    },
                    dataReceived: function() {
                        oViewModel.setProperty("/busy", false);
                    }.bind(this)
                }
            });
        }



    });
});