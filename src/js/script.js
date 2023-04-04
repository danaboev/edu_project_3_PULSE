$(document).ready(function(){
	$('.carousel__inner').slick({
		speed: 1300,
		adaptiveHeight: true,
/* 		autoplay: true,
		autoplaySpeed: 3000, */
		prevArrow:'<button type="button" class="slick-prev "><img src ="icons/left.svg"> </button>',
		nextArrow:'<button type="button" class="slick-next"><img src ="icons/right.svg"> </button>',
		responsive: [
			{
			  breakpoint: 992,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				}
			},
			{
			  breakpoint: 767,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1	
			  }
			},
			{
			  breakpoint: 576,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
		  ]
	  });
}); 