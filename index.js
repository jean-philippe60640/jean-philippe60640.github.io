$(document).ready(function(){
  $('#accordion').find('.accordion-toggle').click(function(){
    $(this).next().slideToggle('low');
    $(".accordion-content").not($(this).next()).slideUp('low');
    $('#ma-progress').animate({width : '70%'}, 200);
});
});//fin doc ready
function flip() {
  $('.card').toggleClass('flipped');
};
function flip1() {
  $('.carte').toggleClass('flipped');
};
