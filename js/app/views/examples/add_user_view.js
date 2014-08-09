define([
    'jquery',
    'underscore',
    'backbone',
    'models/example_model',
    'collections/example_collection',
    'util',
    'messages',
    //included BaseView
    'views/examples/BaseView',

    // Using the Require.js text! plugin, we are loaded raw text
    // which will be used as our views primary template
    //  'text!templates/examples/list.html'
], function($, _, Backbone, examplesCollection) {


    var userAddView = BaseView.extend({

      //  el: $('.base'),

        initialize: function() {
            debug("Add view Intilialized inside debug function");
            this.render();


        },
        render: function() {
          debug("Render called");
        },

    });

    return new userAddView;
});
