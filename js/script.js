$(document).ready(function(){

  // toggle and delete
  $('.course').on('click', function(){
    $(this).find('.detail').slideToggle();
  });

  $('.course .delete').on('click', function(event){
    alert("about to delete");


    event.stopPropagation();
  });
  // This is a change

  //stop propagation
  // $('.course').on('click', function(){
  //   $(this).find('.detail').slideToggle();
  // });

  // $('.course .delete').on('click', function(event){
  //   alert("about to delete");
  // event.stopPropagation();

  // });
});
