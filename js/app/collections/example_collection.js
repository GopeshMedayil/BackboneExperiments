define([
    'underscore',
    'backbone',
    'models/example_model',
    'util',
], function(_, Backbone, exampleModel) {

    var exampleCollection = Backbone.Collection.extend({
        model: exampleModel,
        url: "js/app/Json/user.json",
        initialize: function() {
            debug("collection initialized");

        }
    });

    // We don't instantiate the collection, as we'll do when we need to create a new instance of it.
    return exampleCollection;
});
