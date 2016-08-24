var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');


//Add an overlay
$("body").append($overlay);
  //An image
  $overlay.append($image);
  //A caption


//Capture the click event on a link to an image
$(".gallery-list a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  
  //Update overlay with the image linked in the link
  $image.attr("src", imageLocation);  
  
  //Show the overlay
  $overlay.show();
  //Get child's alt attribute and set caption

});
  

//When overlay is clicked
$overlay.click(function(){
//Hide the overlay
  $overlay.hide();
});

