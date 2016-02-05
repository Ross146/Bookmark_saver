define([
        'underscore',
        'Controllers/BookmarkController'
    ],
function(_,Bookmark) {
    return {
        create: function (application, router) {
            var params = {
                router: router,
                applicationView: application.applicationView,
                app: application
            };

            var controllers = {
                bookmarkController: new Bookmark(params)
            };

            _.forEach(controllers, function (controller, name) {
                controller.name = name;
            });

            return controllers;
        }
    };

});