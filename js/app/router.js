define([
	// Libraries to load
  'jquery',
  'underscore',
  'backbone',
  // Views to load
  'views/examples/list',
  'views/examples/detail'
], function($, _, Backbone, exampleListView, exampleDetailView){
	// All of the dependencies in the array above become parameters of the function to be managed
	var AppRouter = Backbone.Router.extend({
		routes: {
			'example': 'showExamples',
			'example/:id': 'showExample',
			// Default
			//'*actions': 'defaultAction'
		},

		showExamples: function() {
			exampleListView.render();
		},
		showExample: function(id) {
			exampleDetailView.show(id);
		},
	
	});

	var initialize = function(){
		var app_router = new AppRouter();
		Backbone.history.start();
	};

  return {
  	initialize: initialize
  };
});
