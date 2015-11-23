/**
 * Created by Gaurav on 23 November 2015.
 */
//this is what defines the entry point and where to go from here.
var APP = require('../../utils/includeModule');
var proceed = {};
proceed.navigatedTo = function(args) {
    var page = args.object;
    page.bindingContext = null;
    //now navigate to the required console
    APP.navigationModule.navigate(APP.viewsModule.Views.main,page,false);
};
exports.navigatedTo = proceed.navigatedTo;