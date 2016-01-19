var app = app || {};

(function(){
    app.Bookmark = Backbone.Model.extend({
        idAttribute: "Rowkey",
        url: 'someUrl',
        defaults: function () {
            return {
                'Rowkey': null,
                'data-time': new Date().getTime()
            }
        }
    })
})()
