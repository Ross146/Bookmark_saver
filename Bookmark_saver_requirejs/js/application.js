define([
    'marionette',
    'router',
    'views/appView',
],
function (Marionette, Router, ApplicationView ) {

    var App = Marionette.Application.extend({
        initialize: function () {
            console.log("initialize application");
        }
    });
    var Application = new App();

    Application.addRegions({
        'mainRegion': 'body'
    });
    Application.applicationView = new ApplicationView();
    Application.mainRegion.show(Application.applicationView);

    Application.router = new Router(Application); //передавать app1 ???
    Application.on('start', function () {
        console.log('start BackboneHistory');
        Backbone.history.start();
    });
    return Application;

});

//var bookmark1 = new app.Bookmark({
//    title: "habra",
//    description: "новости",
//    location: "habrahabr.ru",
//    priority: 5
//});
//
//var bookmark2 = new app.Bookmark({
//    title: "adfsadf",
//    description: "asdfasdf",
//    location: "asdfasdf",
//    priority: 6
//};






//Bookmarks_static.add(bookmark1);
//bookmark1.save()





