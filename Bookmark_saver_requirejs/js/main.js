require.config({
  shim: {
    //waitSeconds: 700,
    'underscore': { 'exports': '_' },
    'backbone': {
      'deps': ['underscore', 'jquery'],
      'exports': 'Backbone'
    },
    'localStorage': {
      'deps': ['backbone'],

    },
    'marionette': {
      'deps': ['backbone'],
      'exports': 'Marionette'
    },

    'jquery': {'exports': ['$','jquery', 'jQuery', 'JQuery']},
    'formSerialize': ['jquery'],
    'bootstrap':['jquery']
  },
  paths: {
    'backbone': '../bower_components/backbone/backbone',
    'jquery': 'libs/jquery',
    'underscore': 'libs/underscore',
    'localStorage': 'libs/backbone.localStorage',
    'marionette': '../bower_components/backbone.marionette/lib/backbone.marionette',
    'bootstrap':'libs/bootstrap',
    'formSerialize': 'libs/jquery.serializejson.min',
    'text': 'libs/text',
    'moment': 'libs/moment.min'
  }
});


require(['application'], function (Application) {
  Application.start();
});

//require(['collections/collectionBookmark'],function (SomeCollection) {
//  var shit = new SomeCollection;
//  shit.fetch();
//  console.log(shit)
//})