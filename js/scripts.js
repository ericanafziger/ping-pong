var pingPong = function(input){
  var array = [];
  for (var i = 1; i <= input; i++) {
    if (i % 15 === 0){
      array.push("<li>ping-pong</li>");
    } else if (i % 5 === 0) {
      array.push("<li>pong</li>");
    } else if (i % 3 === 0) {
      array.push("<li>ping</li>");
    } else {
    array.push("<li>"+i+"</li>");
    }
  }
  var output = array.join("");
  return output;

}//end of pingPong function


//beginning of UI logic
$(document).ready(function(){

  $("form#input").submit(function(event){

  var number = parseInt($("input#number").val());
  var result = pingPong(number);
  // for (i=0; i < result.length; i += 2) {
  $("#output ul").html(result);
  // }
  // for (i = 0; i < result.length; i++) {
  //   $("#output").html("<li>"+result[i]+"</li>");
  // }
  event.preventDefault();
  });
});
