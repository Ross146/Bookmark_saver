var app = app || {};


(function(){
    app.CollectionModel = Backbone.Collection.extend({
        model: app.Bookmark,
        localStorage: new Backbone.LocalStorage("book-loc")
    });
})();

