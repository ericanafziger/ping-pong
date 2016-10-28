var pingPong = function(input){
  var array = [];
  for (var i = 1; i <= input; i++) {
    if (i % 3 === 0){
      array.push("ping");
    } else if (i % 5 === 0) {
      array.push("pong");
    } else {
    array.push(i);
    }
  }
return array;

}//end of pingPong function



$(document).ready(function(){

  $("form#input").submit(function(event){

  var number = parseInt($("input#number").val());
  var result = pingPong(number);
  $("#output").text(result);
  event.preventDefault();
  });
});
