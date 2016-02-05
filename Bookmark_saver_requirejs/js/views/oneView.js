define([
        'underscore',
        'marionette',
        'text!templates/OneView.html'
    ],

function (_, Marionette, template) {
  var oneView = Marionette.ItemView.extend({

    template: _.template(template),

    events:{

    },

    initialize:function(options){
      this.model = options.model;
    },

    onRender: function() {
      console.log('render', this.model);
    },

    serializeData:function(){
      return {
        model:this.model.toJSON()
      }
    }

  })
  return oneView
})