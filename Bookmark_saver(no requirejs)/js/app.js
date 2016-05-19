var app = app || {};

app.application = Marionette.Application.extend({
    initialize: function (options) {
        console.log("initialize application");
        this.applicationView = new app.AppView();
        this.addRegions({mainRegion : options.container});
        this.mainRegion.show(this.applicationView);
        this.router = new window.app.Router(this);
        this.on('start', function () {
            console.log('start BackboneHistory');
            Backbone.history.start();
        });
    }

});

var application = new app.application({container: 'body'});
application.start();





