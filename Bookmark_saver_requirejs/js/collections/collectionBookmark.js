define([
        'backbone',
        'models/modelBookmark',
        'localStorage'
    ],
function(Backbone,Model,localStorage){
    var Collection = Backbone.Collection.extend({
        model: Model,
        localStorage: new localStorage("book-loc")
    });
    return Collection;
});

