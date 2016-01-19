var app = app || {};


(function() {
    app.Router = Marionette.AppRouter.extend({
        applicationRoutes :{
            "bookmark":{ // controller name
                //routes
                "(/)":"initList",
                "bookmark(s)/all":"initList",
                "bookmark/:id(/)":"initOne",
                "bookmark/edit/:id(/)":"initEditMode",
                "add_bookmark":"initEditMode"
            }
        },
        initialize: function (application) {
            console.log("router initialize");
            this.application = application;
            this._initControllers();
            this._initRoutes();
        },
         _initControllers: function () {
             this.controllers = app.ControllerHashFactory.create(this.application,this);
         },
        _getRoutes:function(route){
            return this.controllers[route+"Controller"];
        },
        _initRoutes:function(){
            var that = this;

            for (var key in this.applicationRoutes){
                var routes = {},
                    def = "activate"; // default method

                for (var zkey in this.applicationRoutes[key]){
                    routes[zkey] = this.applicationRoutes[key][zkey] || def;
                }
                that.processAppRoutes(that._getRoutes(key), routes);
            }
        }

    })
})();