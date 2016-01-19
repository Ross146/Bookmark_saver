var app = app || {};

(function(){
    var headertemplate = $('#headercontent').text();
    app.HeaderView = Marionette.ItemView.extend({
        template: _.template(headertemplate),
        className: 'container'


    })
})()
