sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";
        function onInit() {

        };

        const MainED = Controller.extend("logaligroup.employees.controller.EmployeeDetails", {});
        MainED.prototype.onInit = onInit;

        return MainED;
    });