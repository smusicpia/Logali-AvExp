sap.ui.define([
], function() {
    function dateFormat(date) {
        var timeDay = 24 * 60 * 60 * 1000;
        if(date) {
            var dateNow = new Date();
            var dateFormat = sap.ui.core.format.DateFormat.getDateInstance({pattern : "yyyy/MM/dd"});
            var dateNowFormat = new Date(dateFormat.format(dateNow));
            var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();

            switch (true) {
                //Today
                case date.getTime() === dateNowFormat.getTime():
                    return oResourceBundle.getText("Today");
                //Tomorrow
                case date.getTime() === dateNowFormat.getTime() + timeDay:
                    return oResourceBundle.getText("Tomorrow");
                //Yesterday
                case date.getTime() === dateNowFormat.getTime() - timeDay:
                    return oResourceBundle.getText("Yesterday");
                default:
                    return "";
            }
        }
    };

    return { dateFormat : dateFormat };
});