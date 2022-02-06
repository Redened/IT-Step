$(document).ready(function () {

  $(".next").click(function () {
       $(".active-step").parent().next().find(".step").addClass("active-step").parent().prevAll().find(".step").removeClass("active-step");
       $(".active-option").next().addClass("active-option").prevAll().removeClass("active-option");

       $(".resultbtn").text($("#text").val())
       $(".resultbtn").css({backgroundColor: `${$("#bcolor").val()}`})
  });

  $(".prev").click(function () {
       $(".active-step").parent().prev().find(".step").addClass("active-step").parent().nextAll().find(".step").removeClass("active-step");   
       $(".active-option").prev().addClass("active-option").nextAll().removeClass("active-option");
  })


});




var tooltip = document.querySelectorAll('.slider-tooltip');

document.addEventListener('mousemove', function(This) {
  for (var X = tooltip.length; X--;) {
       tooltip[X].style.left = (This.pageX - 25) + 'px';
       tooltip[X].style.top = (This.pageY - 65) + 'px';
       document.querySelector('.slider-tooltip h5').innerHTML = `${document.querySelector('#range').value}`
   
  }
});