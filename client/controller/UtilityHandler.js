sap.ui.define([
    "sap/ui/base/Object",
    "sap/ui/model/FilterOperator",
    "sap/m/MessageBox"
], function (UI5Object, FilterOperator, MessageBox) {
    "use strict";

    var UtilityHandler = UI5Object.extend("Ticket.controller.UtilityHandler",{

    });

    //TODO change id to SCP destination
    /**
     * Utility method to get the HOST URI
     * @returns {string}
     */
    UtilityHandler.getHost = function () {
        //for local test
        return "https://wechatfra-c4app-c4app-srv.cfapps.eu10.hana.ondemand.com/odata/v4/c4AppService";
        // return jQuery.sap.getModulePath("ServiceRequests") + "/destinations/supportportal/client";
        //return "https://supportportal.cfapps.us10.hana.ondemand.com/client";
    };

    /**
     * Utility method of Posting AJAX request
     * @param {Object} oSetting: request setting
     *       ----{String} url: url of request
     *       ----{String} method: ajax method type, default is "POST"
     *       ----{String} data: url of request
     *       ----{function} success: success call back method
     *       ----{function} error: error call back method			 *
     *       ----{function} complete: complete call back method
     */
    UtilityHandler.postHttpRequest = function(oSetting){
        jQuery.ajax({
            url: oSetting.url,
            dataType: 'jsonp',
            crossDomain: true,
            jsonp: 'jsonpCallback',
            jsonpCallback: 'callback',
            method: oSetting.method? oSetting.method: "POST",
            contentType: "application/json",
            data: JSON.stringify(oSetting.data),
            success: oSetting.success,
            error: oSetting.error,
            complete: oSetting.complete
        });
    };

    /**
     * Utility method of Posting AJAX request
     * @param {Object} oSetting: request setting
     *       ----{String} url: url of request
     *       ----{function} success: success call back method
     *       ----{function} error: error call back method			 *
     *       ----{function} complete: complete call back method
     */
    UtilityHandler.getHttpRequest = function(oSetting){
        jQuery.ajax({
            url: oSetting.url,
            method: "GET",
            dataType: 'jsonp',
            jsonp: 'jsonpCallback',
            jsonpCallback: 'callback',
            crossDomain: true,
            contentType: "application/json",
            data: JSON.stringify(oSetting.data),
            success: oSetting.success,
            error: oSetting.error,
            complete: oSetting.complete
        });
    };

});