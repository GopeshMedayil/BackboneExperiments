/*
 Module for handling utility functions
 @author:Gopesh Gopinath
*/

//Common console.log()
var debug = function(){
  var argLength = arguments.length;

  for(var i=0;i< argLength; i++){
    console.log(arguments[i]);
  }
}
