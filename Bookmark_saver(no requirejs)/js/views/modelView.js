var app = app || {};

(function () {
    app.ModelView = Backbone.View.extend({
        initialize: function () {
            console.log("initialize modelView");
            this.renderContent();
            this.renderHeaderFooter();
            //this.renderFooter();
        },
        onRender: function () {
            this.renderContent();
            this.renderHeaderFooter();
        },
        renderContent: function () {
            new app.ContentView()
        },
        renderHeaderFooter: function () {
            new app.FooterView();
            new app.HeaderView();

        }


    })
})()
