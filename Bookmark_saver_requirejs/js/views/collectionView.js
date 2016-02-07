define([
        'underscore',
        'marionette',
        'text!templates/Bookmarks.html'

    ],
function(_, Marionette,template){

    var BookmarksView = Marionette.ItemView.extend({

        template: _.template(template),

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
            e.preventDefault();
            var id = $(e.currentTarget).closest('tr').data('id');
            this.trigger('remove', id);

        },

        onSort:function(e){
            var $item = $(e.currentTarget);

            this.sortBy = $item.data('sort');

            if ($item.hasClass('bg-danger')){
                this.sortABC = !this.sortABC
            }

            this.render();
        }

    });
    return BookmarksView;
})
