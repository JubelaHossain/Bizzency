$(".srch").click(function () {
    $("#search-part").slideDown()
})
$(".crs").click(function () {
    $("#search-part").slideUp()
})
$(".bar").click(function () {
    $(".hide").slideToggle()
})
$(document).ready(function () {
    $('.venobox').venobox();
});

$('.slider').slick({
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,

});
$('.protfolio-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
   prevArrow:'<i class="fas fa-angle-left prev"></i>',
   nextArrow:'<i class="fas fa-angle-right next"></i>',
});
$('.blog-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
   prevArrow:'<i class="fas fa-angle-left prev"></i>',
   nextArrow:'<i class="fas fa-angle-right next"></i>',
});
$('.Testimonial-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
   prevArrow:'<i class="fas fa-angle-left prev"></i>',
   nextArrow:'<i class="fas fa-angle-right next"></i>',
});
$(document).ready(function(){

	$('#bar1').barfiller();
	$('#bar2').barfiller();
	$('#bar3').barfiller({ barColor: '#fc6' });
	$('#bar4').barfiller({ barColor: '#900', duration: 3000 });
	
});