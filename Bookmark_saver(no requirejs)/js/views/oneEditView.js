var app = app || {};

(function () {
  var template = $('#addone').text();
  app.oneEditView = Marionette.ItemView.extend({

    template: _.template(template),

    events:{
      'submit form':'_onSubmit'
    },

    initialize:function(options){
      this.model = options.model;
    },

    onRender: function() {
      console.log('render one edit page');
    },

    serializeData:function(){
      return {
        model:this.model.toJSON()
      }
    },

    _onSubmit:function(e){
      var $form = $(e.currentTarget),
          data = $form.serializeJSON({parseAll:true});
      this.trigger('save-data', data);

      e.preventDefault();
    }


  });
}) ()