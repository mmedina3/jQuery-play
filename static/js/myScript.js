$(document).ready(function() {
  // console.log('myScript.js loaded!');

  $(document).ready(function(){
    $("#purple").hover(function(){
        $(this).css("background-color", "purple");
      }, function(){
     $(this).css("background-color", "orange");
          });
         });

  $('#red-sentence').click(function() {
    // First remove the purple-text class in case it was added first.
    $(this).removeClass('purple-text');
    // Then add the red-text class to turn the sentence red.
    $(this).addClass('red-text');
  });

  $('#blue-button').click(function() {
    // We can also "chain" methods together like this:
    $('#blue-sentence')
    .removeClass('purple-text')
    .addClass('blue-text');
  });

  $('#purple-button').click(function() {
    $('.colorful-sentence').addClass('purple-text');
  });

  $("#container").hover(function() {
      $(this).addClass('blue-text');
      $(this).addClass('increase-font');
  });

   $("html").keypress(function(){
     $(this).toggleClass('hotpink-text');
   });

});
