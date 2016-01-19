var app = app || {};

(function() {
    var ControllerHashFactory = function () {
    return {
        create: function (application, router) {
            var params = {
                router: router,
                applicationView: application.applicationView,
                app: application
            };

            var controllers = {
                bookmarkController: new app.BookmarkController(params)
            };

            _.forEach(controllers, function (controller, name) {
                controller.name = name;
            });
            return controllers;
        }
    };
    };
    app.ControllerHashFactory = ControllerHashFactory();
})();