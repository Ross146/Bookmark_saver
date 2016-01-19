var app = app || {};

(function(){
    var maintemplate = $('#bookmarks').text();
    app.ContentView = Marionette.ItemView.extend({
        template: _.template(maintemplate),
        className: 'container'
    })


})()