sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "logaligroup/employees/model/formatter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, formatter) {
        "use strict";
        function onInit() {

        };

        function onCreateIncidence(oEvent) {
            var tableIncidence = this.getView().byId("tableIncidence");
            var newIncidence = sap.ui.xmlfragment("logaligroup.employees.fragment.NewIncidence", this);
            var incidenceModel = this.getView().getModel("incidenceModel");
            var odata = incidenceModel.getData();
            var index = odata.length;
            odata.push({index : index + 1});
            incidenceModel.refresh();
            newIncidence.bindElement("incidenceModel>/" + index);
            tableIncidence.addContent(newIncidence);
        };

        function onDeleteIncidence(oEvent) {
            var tableIncidence = this.getView().byId("tableIncidence");
            var rowIncidence = oEvent.getSource().getParent().getParent();
            var incidenceModel = this.getView().getModel("incidenceModel");
            var odata = incidenceModel.getData();
            var oContext = rowIncidence.getBindingContext("incidenceModel");

            odata.splice(parseInt(oContext.getPath().replace("/","")), 1);
            for (var i in odata) {
                odata[i].index = parseInt(i) + 1;
            };
            
            incidenceModel.refresh();
            tableIncidence.removeContent(rowIncidence);
            for (var j in tableIncidence.getContent()) {
                tableIncidence.getContent()[j].bindElement("incidenceModel>/" + j);
            }
        };

        const MainED = Controller.extend("logaligroup.employees.controller.EmployeeDetails", {});
        MainED.prototype.onInit = onInit;
        MainED.prototype.onCreateIncidence = onCreateIncidence;
        MainED.prototype.Formatter = formatter;
        MainED.prototype.onDeleteIncidence = onDeleteIncidence;
        return MainED;
    });