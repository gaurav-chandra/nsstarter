/**
 * Created by Gaurav on 23 November 2015.
 */
var main = {};
main.navigatedTo = function(args) {
    var page = args.object;
    page.bindingContext = null;
};
exports.navigatedTo = main.navigatedTo;