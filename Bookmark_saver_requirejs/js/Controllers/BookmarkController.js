define([
    'backbone',
    'Controllers/ControllerBase',
    'models/modelBookmark',
    'collections/collectionBookmark',
    'views/collectionView',
    'views/oneView',
    'views/oneEditView'

], function (Backbone, ControllerBase, Model, Collection, ListView, OneView, EditView) {

    var BookmarkController = ControllerBase.extend({
        titleHeader: 'Bookmarks',

        initialize: function (options) {
            ControllerBase.prototype.initialize.apply(this, arguments);
        },

        initList: function () {
            console.log('init list page uhahaha');
            this.collection = new Collection();
            this.collection.fetch();
            this.view = new ListView({
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
            this.one(id, OneView);
        },

        initEditMode:function(id){
            console.log(id);
            this.one(id, EditView)
        },
        _onSave:function(data){
            console.log('controller save-data', data);
            var newBookmark = new Model(data);
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
    })
    return BookmarkController;
})