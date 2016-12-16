$(document).ready(function() {
  var $color = $(".selected-color").css("background-color");
  var $canvas = $("canvas");
  var context = $canvas[0].getContext("2d");
  var lastEvent;
  var mouseDown = false;
  
  //show and hide new color selector
  $("#new-color-btn").click(function() {
    $(".color-selector").toggle();
  });

  //display selected color
  $(".select-color").on("click", "li", function(){
    $(this).addClass("selected-color");
    $(this).siblings().removeClass("selected-color");
    $color = $(this).css("background-color")
  });
  
  function currentColor(){
   var r = $("#red").val();
   var b = $("#blue").val();
   var g = $("#green").val();
   var color = "rgb(" + r + "," + g + "," + b + ")";
   $(".new-color").css("background", color);
   return color;
  }
  
  //update "new-color"
  $(".sliders input").change(function(){
    $(".new-color").css("background", currentColor());
  });
  
  //"add new color" button pressed
  $("#add-new-color").click(function(){
    var $newColor = $("<li></li>");
    $newColor.css("background", currentColor());
    $($newColor).appendTo(".select-color ul").addClass("colors");
    //$("<li></li>").appendTo(".select-color ul").addClass("colors");
  });
  
  //canvas mouse events
  $canvas.mousedown(function(e){
    lastEvent = e;
    mouseDown = true;
  }).mousemove(function(e){
    if(mouseDown){
    context.beginPath();
    //start drawing from this point onwards
    context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
    //move the line to where the move event is
    context.lineTo(e.offsetX, e.offsetY);
    context.strokeStyle = $color;
    context.stroke();
    //update lastEvent to be the new value from e
    lastEvent = e;
    }
    //if mousedown is false, then stop drawing
  }).mouseup(function(){
    mouseDown = false;
  })
  
});