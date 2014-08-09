define([
  'underscore',
  'backbone'
], function(_, Backbone){
	var exampleModel = Backbone.Model.extend({
		//It'll only be used when we are trying to fetch a single object (automatically adds "/[id]")
		url: "js/app/Json/user.json",
		defaults: {
      id:"",
			name: ""
		}
	});

	// We don instantiate the model, as we'll do when we need to create a new instance of it.
  return exampleModel;
});
