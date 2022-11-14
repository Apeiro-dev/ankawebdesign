$(document).ready(function(){

  // If we click on the menu it opens or close;
  $(".bi-list").click(function(){
    $(".nav-bar").slideToggle('slow');
    $('.header-button').slideToggle('.slow');
  });
  
  //If we click on the links to it should close;
  var theWidth = 600;
  if(screen.width <= theWidth)
  {
    $('.nav-link').click(function(){
      $('.nav-bar').slideUp('slow');
      $('.header-button').slideUp('.slow');
    })
  };
})
