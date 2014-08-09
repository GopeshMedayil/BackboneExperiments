define([
    'underscore',
    'backbone'
], function(_, Backbone) {
    var exampleModel = Backbone.Model.extend({
        url: "js/app/Json/user.json",
        defaults: {
            id: "",
            name: ""
        }
    });

    // We don instantiate the model, as we'll do when we need to create a new instance of it.
    return exampleModel;
});
