var app = app || {};

(function () {
    app.AppView = Marionette.LayoutView.extend({
        template: _.template($('#maincontent').text()),

        initialize: function () {
            console.log("appView initialize");
        },

        regions : {
            container: '#content',
            header: '#header',
            footer: '.footer'
        },

        onRender:function(){
            this.renderHeader();
            this.footer.show(new app.FooterView());
        },

        renderHeader: function() {
            this.header.show(new app.HeaderView());
        },

        showContent:function(view){
            if (view){
                this.contentView = view;
            }
            this.container.show(this.contentView);
        },

        refreshContent: function(view){
            this.showContent(view);
        }

    });



})()