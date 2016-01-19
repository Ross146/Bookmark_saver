var app = app || {};

var app = app || {};
(function() {

    app.BookmarkController = app.appController.extend({
        titleHeader: 'Bookmarks',

        initialize: function (options) {
            app.appController.prototype.initialize.apply(this, arguments);
        },



        initList: function () {
            console.log('init list page uhahaha');
            this.collection = new app.CollectionModel();
            this.collection.fetch();
            this.view = new app.BookmarksView({
                collection: this.collection
            });
            this.listenTo(this.view, {
                'remove':this._onRemove
            }, this);
            this.options.applicationView.showContent(this.view);
        },

        one:function(id, view){
            console.log('init one', id);
            var _id = id || null;
            if (_id == null) {
                this.model = new app.Bookmark({
                    Rowkey: _id
                });
            } else {
                this.model = this.collection.get(id);
            }
            this.view = new view({
                model:this.model
            });
            this.listenTo(this.view, {
                'save-data':this._onSave
            }, this);

            this.options.applicationView.showContent(this.view);
        },

        initOne: function (id) {
            this.one(id, app.oneView);
        },

        initEditMode:function(id){
            console.log(id);
            this.one(id, app.oneEditView)
        },
        _onSave:function(data){
            console.log('controller save-data', data);
            var newBookmark = new app.Bookmark(data);
            this.collection.add(newBookmark);
            newBookmark.save();
            this.options.router.navigate('/', true);
        },
        _onRemove: function (id) {
            console.log("remove item" + id);
            var model = this.collection.get(id);
            model.destroy();
            this.initList();
        }
    });
})()