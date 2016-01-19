var app = app || {};

(function(){
    var footertemplate = $('#footercontent').text();
    app.FooterView = Marionette.ItemView.extend({
        className: 'container',
        template: _.template(footertemplate),

        initialize:function(options){

        }

    });


})()
