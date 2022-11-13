$(document).ready(function(){

  // If we click on the menu it opens or close;
  $(".menu-btn").click(function(){
    $(".nav").slideToggle('slow');
    $('.social-media').slideToggle('.slow');
  });
  
  //If we click on the links to it should close;
  var theWidth = 600;
  if(screen.width <= theWidth)
  {
    $('.nav-link').click(function(){
      $('.nav').slideUp('slow');
      $('.social-media').slideUp('.slow');
    })
  }
})
