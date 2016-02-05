define([
        'underscore',
        'marionette',
        'text!templates/Header.html'
    ],
function(_,Marionette,template){
    var HeaderView = Marionette.ItemView.extend({
        template: _.template(template),
        className: 'container'


    })
    return HeaderView;
});
