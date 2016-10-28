var pingPong = function(input){
return "yay";



}//end of pingPong function



$(document).ready(function(){

  $("form#input").submit(function(event){

  var number = parseInt($("input#number").val());
  var result = pingPong(number);
  $("#output").text(result);
  event.preventDefault();
  });
});
