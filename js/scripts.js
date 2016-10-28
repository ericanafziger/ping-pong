var pingPong = function(input){
  var array = [];
  for (var i = 1; i <= input; i++) {
    if (i % 15 === 0){
      array.push("ping-pong");
    } else if (i % 5 === 0) {
      array.push("pong");
    } else if (i % 3 === 0) {
      array.push("ping");
    } else {
    array.push(i);
    }
  }
  var output = array.join(" - ");
  return output;

}//end of pingPong function


//beginning of UI logic
$(document).ready(function(){

  $("form#input").submit(function(event){

  var number = parseInt($("input#number").val());
  var result = pingPong(number);
  $("#output").text(result);
  event.preventDefault();
  });
});
