define([
        'underscore',
        'marionette',
        'views/headerView',
        'views/footerView',
        'text!templates/Main.html'
    ],
function (_,Marionette, HeaderView, FooterView, template) {
    var AppView = Marionette.LayoutView.extend({
        template: _.template(template),

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
            this.footer.show(new FooterView());
        },

        renderHeader: function() {
            this.header.show(new HeaderView());
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
    return AppView;


})