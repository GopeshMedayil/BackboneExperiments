define([
    'jquery',
    'underscore',
    'backbone',
    'models/example_model',
    'collections/example_collection',
    'util',
    'messages',
    'views/examples/add_user_view',
    //included BaseView
    'views/examples/BaseView',


    // Using the Require.js text! plugin, we are loaded raw text
    // which will be used as our views primary template
    //  'text!templates/examples/list.html'
], function($, _, Backbone, examplesCollection) {


    var exampleListView = BaseView.extend({

        el: $('.base'),

        initialize: function() {
            debug(messages.M01);
            debug("List view Intilialized inside debug function");

            collection = new examplesCollection();

        },
        render: function() {
            var _this = this;
            var data = {};
            // Call the base view's render function
            collection.fetch({
                success: function(collection, response, options) {
                    $.get('templates/list.html', function(data) {
                        template = _.template(data, {
                            data: response
                        });
                        _this.$el.html(template);
                    }, 'html');

                }
            });
            var renderedContent = collection.toJSON();
            //debug("collections",renderedContent);
            BaseView.prototype.render.apply(this, arguments);
            _this.close();
        },
        events:{
          'click .add' : 'addUser',
          'click .save': 'saveUser'
        },
        addUser:function(){
          // cache jquery selectors
          var $list = $('.list');
          var $add  = $('.add');
          $list.hide();
          $add.show();


        },
        saveUser: function(){
          alert("saved");
          collection = new examplesCollection();
          this.render();
        }

        //  return new exampleListView;
    });

    return new exampleListView;
});
