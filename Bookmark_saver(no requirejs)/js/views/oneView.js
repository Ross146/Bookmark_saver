var app = app || {};

(function () {
  var template = $('#oneview').text();
  app.oneView = Marionette.ItemView.extend({

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




  });
}) ()