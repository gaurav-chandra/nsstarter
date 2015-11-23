/**
 * Created by Gaurav on 23 November 2015.
 */
var APP = require('../../utils/includeModule');
var main = {};
main.$scope = new APP.observableModule.Observable();
main.enter = function(args) {
    var page = args.object;
    page.bindingContext = main.$scope;
    main.$scope.set("name", "INDIATIMES");
};
main.$scope.set("name", "Gaurav Chandra");
main.$scope.set('tapAction',function(event){
    APP.notificationsModule.showError('OI');
});
exports.enter = main.enter;