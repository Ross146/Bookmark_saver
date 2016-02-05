define([
    'underscore',
    'marionette',
    'text!templates/Footer.html',
    'moment'
],function(_,Marionette,template){
    var FooterView = Marionette.ItemView.extend({
        className: 'container',
        template: _.template(template),

        initialize:function(options){

        }

    });

    return FooterView
})
