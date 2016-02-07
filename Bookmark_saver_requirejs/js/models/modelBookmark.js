define([
    'backbone'
],

function(Backbone){
    var Bookmark = Backbone.Model.extend({
        idAttribute: "Rowkey",
        //url: 'someUrl',
        defaults: function () {
            return {
                'Rowkey': null,
                'data-time': new Date().getTime()
            }
        }
    })
    return Bookmark
})
