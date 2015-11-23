/**
 * Created by Gaurav on 23 November 2015.
 */
var APP = require('../../utils/includeModule');
var main = {};
main.$scope = new APP.observableModule.Observable();
var camera = require("camera");
var imageModule = require("ui/image");
main.enter = function(args) {
    var page = args.object;
    page.bindingContext = main.$scope;
    main.$scope.set("name", global.myVariable);
};
main.$scope.set("name", "Gaurav Chandra");
main.$scope.set('tapAction',function(event){
    APP.notificationsModule.showError('OI');
});
main.$scope.set('openCamera',function(event){
    camera.takePicture().then(function (result) {
        console.log("Result is an image source instance");
        var image = new imageModule.Image();
        image.imageSource = result;
        main.$scope.set("imgSrc", image.imageSource);
    });
});
exports.enter = main.enter;