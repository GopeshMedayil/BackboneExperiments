/*
Base View class for common functions
@author:Gopesh Gopinath
*/

var BaseView = Backbone.View.extend({

 render: function () {

 },

 close: function() {

   //this.remove();
   this.unbind();
   

 }

});
