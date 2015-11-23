var frameModule = require("ui/frame");
function navigate(state,stateParams,animated) {
    var navigationEntry = {
        moduleName: state,
        context: stateParams || {},
        animated: animated || true
    };
    var topmost = frameModule.topmost();
    topmost.navigate(navigationEntry);
}
exports.navigate = navigate;
function goBack() {
    var topmost = frameModule.topmost();
    topmost.goBack();
}
exports.goBack = goBack;
