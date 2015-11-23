var dialogsModule = require("ui/dialogs");
function alert(title,message,buttonText) {
    dialogsModule.alert({ title: title, message: message, okButtonText: buttonText });
}
exports.alert = alert;
function showError(error) {
    dialogsModule.alert({ title: "Error", message: error, okButtonText: "Close" });
}
exports.showError = showError;
function showInfo(message) {
    dialogsModule.alert({ title: "Info", message: message, okButtonText: "OK" });
}
exports.showInfo = showInfo;
function confirm(title, message) {
    return dialogsModule.confirm({
        title: title,
        message: message,
        okButtonText: "YES",
        cancelButtonText: "NO"
    });
}
exports.confirm = confirm;
