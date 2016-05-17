var app = app || {};

var application = Marionette.Application.extend({
    initialize: function () {
        console.log("initialize application");
        this.applicationView = new app.AppView();
        this.mainRegion.show(this.applicationView);
        this.router = new window.app.Router(this);
        this.on('start', function () {
            console.log('start BackboneHistory');
            Backbone.history.start();
        });
    },
    regions: {
        'mainRegion': 'body'
    }

});

(function () {

    window.app1 = new application;
    app1.start();

}) ();







//Bookmarks_static.add(bookmark1);
//bookmark1.save()





