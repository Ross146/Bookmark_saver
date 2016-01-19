var app = app || {};
(function () {

    var application = Marionette.Application.extend({
        initialize: function () {
            console.log("initialize application");
        }
    });
    window.app1 = new application;
    app1.addRegions({
        'mainRegion': 'body'
    });
    app1.applicationView = new app.AppView();
    app1.mainRegion.show(app1.applicationView);

    app1.router = new window.app.Router(app1); //передавать app1 ???
    app1.on('start', function () {
        console.log('start BackboneHistory');
        Backbone.history.start();
    })

    app1.start();

}) ();

var bookmark1 = new app.Bookmark({
    title: "habra",
    description: "новости",
    location: "habrahabr.ru",
    priority: 5
});

var bookmark2 = new app.Bookmark({
    title: "adfsadf",
    description: "asdfasdf",
    location: "asdfasdf",
    priority: 6
});






//Bookmarks_static.add(bookmark1);
//bookmark1.save()





