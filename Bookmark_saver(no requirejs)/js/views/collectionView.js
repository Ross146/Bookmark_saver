var app = app || {};

(function(){
    var bookmarkstemplate = $('#bookmarks').text();

    app.BookmarksView = Marionette.ItemView.extend({

        template: _.template($('#bookmarks').text()),

        sortBy:'priority',
        sortABC: true,

        events:{
            'click .js-remove' :'onRemove',
            'submit form' : 'onSubmit',
            'click .js-sortable':'onSort'
        },

        initialize:function(options){
            this.collection = options.collection;
            this.listenTo(this.collection, {
                'sync': this._renderList,
                'remove': this._renderList
            }, this);
        },

        serializeData: function(){
            return {
                title: 'Collection list',
                sortBy: this.sortBy,
                sortABC: this.sortABC,
                collection: this.collection.toJSON()
            }
        },
        onSubmit: function() {

        },
        onRemove: function(e) {
            var id = $(e.currentTarget).closest('tr').data('id');
            this.trigger('remove', id);
            e.preventDefault();
        },

        onSort:function(e){
            var $item = $(e.currentTarget);

            this.sortBy = $item.data('sort');

            if ($item.hasClass('bg-danger')){
                this.sortABC = !this.sortABC
            }

            this.render();
        }

    })
})()
