var pingPong = function(input){
  var array = [];
  var htmlResult = [];
  for (var i = 1; i <= input; i++) {
    if (i % 15 === 0){
      array.push("ping-pong");
    } else if (i % 5 === 0) {
      array.push("pong");
    } else if (i % 3 === 0) {
      array.push("ping");
    } else {
    array.push(i.toString());
    }
  }
  for (i=0; i < array.length; i++) {
    htmlResult.push("<li>"+array[i]+"</li>")
  }
  return htmlResult;

}//end of pingPong function


//beginning of UI logic
$(document).ready(function(){

  $("form#input").submit(function(event){

  var number = parseInt($("input#number").val());
  var result = pingPong(number);
  // for (i=0; i < result.length; i += 2) {
  $("#output ul").html(result);
  event.preventDefault();
  });
});
