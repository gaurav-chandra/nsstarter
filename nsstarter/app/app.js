var APP = {};
//couple of default requires
APP.application = require('application');
APP.includeModules = require('./utils/includeModule');
APP.viewsModule = require("./utils/views");
//some global functions
APP.rootScope = {};
//starting the app
APP.application.cssFile = "./app.css";
APP.application.on(APP.application.launchEvent, function (args) {
    if (args.android) {
        // For Android applications, args.android is an android.content.Intent class.
        console.log("Launched Android application with the following intent: " + args.android + ".");
    } else if (args.ios !== undefined) {
        // For iOS applications, args.ios is NSDictionary (launchOptions).
        console.log("Launched iOS application with options: " + args.ios);
    }
    APP.includeModules.insomniaModule.keepAwake().then(function() {
        console.log("Insomnia is active");
    });
    //this is the main view which is loaded
    APP.application.mainEntry = {
        moduleName: APP.viewsModule.Views.router,
        backstackVisible: false
    };
});

APP.application.on(APP.application.suspendEvent, function (args) {
    if (args.android) {
        // For Android applications, args.android is an android activity class.
        console.log("Activity: " + args.android);
    } else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.
        console.log("UIApplication: " + args.ios);
    }
});

APP.application.on(APP.application.resumeEvent, function (args) {
    if (args.android) {
        // For Android applications, args.android is an android activity class.
        console.log("Activity: " + args.android);
    } else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.
        console.log("UIApplication: " + args.ios);
    }
});

APP.application.on(APP.application.exitEvent, function (args) {
    if (args.android) {
        // For Android applications, args.android is an android activity class.
        console.log("Activity: " + args.android);
    } else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.
        console.log("UIApplication: " + args.ios);
    }
    APP.includeModules.insomniaModule.allowSleepAgain().then(function() {
        console.log("Insomnia is inactive, good night!");
    });
});

APP.application.on(APP.application.lowMemoryEvent, function (args) {
    if (args.android) {
        // For Android applications, args.android is an android activity class.
        console.log("Activity: " + args.android);
    } else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.
        console.log("UIApplication: " + args.ios);
    }
});

APP.application.on(APP.application.uncaughtErrorEvent, function (args) {
    if (args.android) {
        // For Android applications, args.android is an NativeScriptError.
        console.log("NativeScriptError: " + args.android);
    } else if (args.ios) {
        // For iOS applications, args.ios is NativeScriptError.
        console.log("NativeScriptError: " + args.ios);
    }
});
APP.application.start();
