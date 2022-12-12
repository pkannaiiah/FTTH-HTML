// IOH Custom JS

//Footer Accordion
const accordionItemFooters = document.querySelectorAll(
    ".footer_menu_head"
);
accordionItemFooters.forEach((accordionItemFooter) => {
    accordionItemFooter.addEventListener("click", (event) => {
        // Allow to collapse one item at a time
        const currentlyActiveAccordionItemFooter = document.querySelector(
            ".footer_menu_head.active"
        );
        if (
            currentlyActiveAccordionItemFooter &&
            currentlyActiveAccordionItemFooter !== accordionItemFooter
        ) {
            currentlyActiveAccordionItemFooter.classList.toggle("active");
            currentlyActiveAccordionItemFooter.nextElementSibling.style.maxHeight = 0;
        }
        //

        accordionItemFooter.classList.toggle("active");
        const accordionItemBody = accordionItemFooter.nextElementSibling;
        if (accordionItemFooter.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        } else {
            accordionItemBody.style.maxHeight = 0;
        }
    });
});

//FAQ Accordion
$('.card .collapse').on('shown.bs.collapse', function(e) {
    var $card = $(this).closest('.card');
    $('html,body').animate({
      scrollTop: $card.offset().top - 100
    }, 500);
});

//dashboardSwiper
var swiper = new Swiper(".dashboardSwiper", {
	pagination: {
	  el: ".swiper-pagination",
	},
});
// Hide the pagination if only one slide
if ($('.dashboardSwiper .swiper-slide').length == 1) {
    $('.dashboardSwiper .swiper-pagination').addClass('d-none');
}

//Header Fixed
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 10) {
            $('.header_mainmenu').addClass('fixed');
            $('.top_header').addClass('remove');
        } else {
            $('.header_mainmenu').removeClass('fixed');
            $('.top_header').removeClass('remove');
        }
    });
});
$(".humburger").click(function() {
    $(".header_mainmenu").toggleClass('humburger_active');
});


//Open Dropdon when click on User icon
$(".login_action").click(function(e) {
    $(".post_login_dropdown,.pre_login_dropdown").toggleClass('active');
	e.stopPropagation();
});
$(".post_login_dropdown,.pre_login_dropdown").click(function(e){
    e.stopPropagation();
});
$(document).click(function(){
    $(".post_login_dropdown,.pre_login_dropdown").removeClass('active');
});

//Payment Popups open when width in 992
$('.virtualPay,.walletPay,.cardPay').on('show.bs.modal', function (e) {
    if (window.innerWidth >= 992) {
        return e.preventDefault();
    }
});

//When click on payment radio option divs hide & show
$(document).ready(function(){
    $('.box_radio input').click(function(){
        // alert();
        var target = $(this).data('target-id');
        $('.hide_div').hide(); 
        $('.hide_div[data-target="'+target+'"]').show();  
    }); 

}); 

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

//Scroll Top
var btn = $('.sroll_top_fixed');

$(window).scroll(function() {   
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

//home global_hero_banner
var swiper = new Swiper(".global_hero_banner", {
	pagination: {
	  el: ".swiper-pagination",
	},
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});
// Hide the pagination if only one slide
if ($('.global_hero_banner .swiper-slide').length == 1) {
    $('.global_hero_banner .swiper-pagination').addClass('d-none');
}

//content swiper resp
let options = {};
if ( $(".sw_produts--swiper .swiper-slide").length == 1 ) {
	options = {
	slidesPerView: 3,
	spaceBetween: 20,
	breakpoints: {
	480: {
	slidesPerView: 1,
	spaceBetween: 0,
	},
	}
	}
   } else {
	options = {
	slidesPerView: 3,
	spaceBetween: 20,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	// init: false,
	breakpoints: {
		991: {
			slidesPerView: 3,
			centeredSlides: false,
		},
		768: {
			slidesPerView: 2,
			centeredSlides: false,
		},
        500: {
			slidesPerView: 1,
			centeredSlides: false,
		},
		425: {
			slidesPerView: 1,
			centeredSlides: false,
		},
		320: {
			slidesPerView: 1,
			centeredSlides: false,
		}, 
	}
	}
}

var swiper1 = new Swiper('.sw_produts--swiper', options);
var sw_length = swiper1.length;
if(sw_length <= 3){
$('.sw_produts--swiper .swiper-pagination').addClass('pagenav');
}

//content swiper resp
if ( $(".preferred-package--swiper .swiper-slide").length == 1 ) {
	options = {
	slidesPerView: 3,
    slidesPerColumn: 2,
	spaceBetween: 20,
	breakpoints: {
	480: {
	slidesPerView: 1,
	spaceBetween: 0,
	},
	}
	}
   } else {
	options = {
	slidesPerView: 3,
    slidesPerColumn: 2,
	spaceBetween: 20,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	// init: false,
	breakpoints: {
		991: {
			slidesPerView: 3,
			centeredSlides: false,
		},
		768: {
			slidesPerView: 1.5,
			centeredSlides: false,
		},
		425: {
			slidesPerView: 1.3,
			centeredSlides: false,
		},
		320: {
			slidesPerView: 1.3,
			centeredSlides: false,
		}, 
	}
	}
}

var swiper1 = new Swiper('.preferred-package--swiper', options);
var sw_length = swiper1.length;
if(sw_length <= 3){
$('.preferred-package--swiper .swiper-pagination').addClass('pagenav');
}


//Full Card Swiper
var homeswiper02 = new Swiper('.full_card_swiper', {
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper_btn_next',
        prevEl: '.swiper_btn_prev',
    },
});


//Fixed to top when tab responsive
$(window).scroll(function(){
    if($(document).width() < 768) { 
        if ($(this).scrollTop() > 160) {
            $('.tab_responsive_fix').addClass('fixed');
        } else {
            $('.tab_responsive_fix').removeClass('fixed');
        }
    }
});

// $(document).ready(function(){
//     $(this).scrollTop(0);
// });

///////////////////////////
//multi_row_swp-01 Starts
(function() {
    'use strict';
    const breakpoint = window.matchMedia( '(min-width:1199px)' );
    // keep track of swiper instances to destroy later
    let mySwiper;

    const breakpointChecker = function() {

    // if larger viewport and multi-row layout needed
    if ( breakpoint.matches === true ) {

        // clean up old instances and inline styles when available
        if ( mySwiper !== undefined ) mySwiper.destroy( true, true );

        // or/and do nothing
        return;

        // else if a small viewport and single column layout needed
        } else if ( breakpoint.matches === false ) {

        // fire small viewport version of swiper
        return enableSwiper();
        }
    };
    const enableSwiper = function() {
    mySwiper = new Swiper ('.multi-rows-swp-01-container', {
        // slidesPerView: 1.2,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 10, 
        freeMode: true,
        observer: true,
        observeParents: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // breakpoints: {
        // 376: {
        //     centeredSlides: false,
        // },
        // }
    });
    };
    // keep an eye on viewport size changes
    breakpoint.addListener(breakpointChecker);

    // kickstart
    breakpointChecker();
})();
//multi_row_swp-01 Ends


//loacation page search option 
 //location pg > search location js
 $(document).ready(function(){
    $('.Search-txtShowDiv').focus(function(){
        $('.search-location').fadeIn(100);
}).focusout(function(){
$('.search-location').fadeOut(100);
});
});

//popup background
$('.modal').modal({backdrop: 'static', keyboard: false});

///new slider st


///////////////////////////
//multi_row_swp-01 Starts
(function() {
    'use strict';
    const breakpoint = window.matchMedia( '(min-width:1199px)' );
    // keep track of swiper instances to destroy later
    let mySwiper;

    const breakpointChecker = function() {

    // if larger viewport and multi-row layout needed
    if ( breakpoint.matches === true ) {

        // clean up old instances and inline styles when available
        if ( mySwiper !== undefined ) mySwiper.destroy( true, true );

        // or/and do nothing
        return;

        // else if a small viewport and single column layout needed
        } else if ( breakpoint.matches === false ) {

        // fire small viewport version of swiper
        return enableSwiper();
        }
    };
    const enableSwiper = function() {
    mySwiper = new Swiper ('.multi-rows-swp-01-container-v1', {
        // slidesPerView: 1.2,
        slidesPerView: 'auto',
        // centeredSlides: true,
        spaceBetween: 10,
        // freeMode: true,
        observer: true,
        observeParents: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // breakpoints: {
        // 376: {
        //     centeredSlides: false,
        // },
        // }
    });
    };
    // keep an eye on viewport size changes
    breakpoint.addListener(breakpointChecker);

    // kickstart
    breakpointChecker();
})();
//multi_row_swp-01 Ends
