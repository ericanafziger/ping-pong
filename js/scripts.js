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

$(".welcome").click(function() {
    $('html, body').animate({
        scrollTop: $("#welcome").offset().top
    }, 800);
});
$(".play").click(function() {
    $('html, body').animate({
        scrollTop: $("#play").offset().top
    }, 800);
});
$(".about").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 800);
});

  $("form#input").submit(function(event){

  var number = parseInt($("input#number").val());
  var result = pingPong(number);
  if (result.length > 0) {
  $("#output ul").html(result);
  $("#input").removeClass("has-error");
  $("#output").show();
} else {
  $("#input").effect("shake", { times:2 }).addClass("has-error");
}

// } else if (result.length > 12 && result.length <= 24) {
  // $("#output ul").html(result.range(12));
  // $("#output2 ul").html(result.range(13,24));
//   $("#output2").show();
// }
// console.log(result.range(10));
// if (result.length <= 12) {

  event.preventDefault();
  });
});
