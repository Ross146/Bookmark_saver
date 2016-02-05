define([
        'underscore',
        'marionette',
        'text!templates/Addone.html'
    ],
function (_,Marionette,template) {
  var oneEditView = Marionette.ItemView.extend({
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
  return oneEditView
})