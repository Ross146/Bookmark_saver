//define([
//        'backbone',
//        'models/modelBookmark',
//        'localStorage'
//    ],
//function(Backbone,Model,Storage){
//    var Collection = Backbone.Collection.extend({
//        model: Model,
//        localStorage: new Storage('book-loc')
//    });
//    //var shit = new Collection;
//    //shit.fetch()
//    //console.log(shit)
//    return Collection;
//});
//

define([
  'models/modelBookmark',
  "localStorage"
], function(Model) {

  var SomeCollection = Backbone.Collection.extend({
    model: Model,
    localStorage: new Backbone.LocalStorage("book-loc") // Unique name within your app.
  });

  return SomeCollection;
});