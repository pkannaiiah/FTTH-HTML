
$(document).ready(function() {
    $( '.card-header' ).click( function( ) {
    var pane = $(this);
    setTimeout(function(){
     var $panel = pane.closest('.card');
        $('html,body').animate({
            scrollTop: $panel.offset().top - 100
        }, 500); 
    }, 300 );
    });
});
// IOH Custom JS
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
    // accordionItemFooter.addEventListener("click", function () {
    //   document.getElementById("test").scrollIntoView({ behavior: "smooth" });
    // });
});

const accordionItemHeaders = document.querySelectorAll(
    ".ioh_sub_menu_head"
);
accordionItemHeaders.forEach((accordionItemHeader) => {
    accordionItemHeader.addEventListener("click", (event) => {
        // Allow to collapse one item at a time
        const currentlyActiveAccordionItemHeader = document.querySelector(
            ".ioh_sub_menu_head.active"
        );
        if (
            currentlyActiveAccordionItemHeader &&
            currentlyActiveAccordionItemHeader !== accordionItemHeader
        ) {
            currentlyActiveAccordionItemHeader.classList.toggle("active");
            currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
        }
        //

        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if (accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        } else {
            accordionItemBody.style.maxHeight = 0;
        }
    });
    // accordionItemHeader.addEventListener("click", function () {
    //   document.getElementById("test").scrollIntoView({ behavior: "smooth" });
    // });
});



//global_hero_banner
var swiper = new Swiper(".global_hero_banner", {
    pagination: {
        el: ".swiper-pagination",
    },
});
// Hide the pagination if only one slide
if ($('.global_hero_banner .swiper-slide').length == 1) {
    $('.global_hero_banner .swiper-pagination').addClass('d-none');
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

//Gallery Multi Courousel Swiper
var galleryMultiCarouselThumbs = new Swiper('.gallery_multi_carousel_swiper_thumbs', {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
        300: {
            spaceBetween: 0,
            freeMode: true,
        },
        575: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
    }
});
var galleryMultiCarousel = new Swiper('.gallery_multi_carousel_swiper', {
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper_btn_next',
        prevEl: '.swiper_btn_prev',
    },
    thumbs: {
        swiper: galleryMultiCarouselThumbs
    },
});


//Milestone Swiper
var swiper = new Swiper(".milestone-thumbs", {
    spaceBetween: 10,
    slidesPerView: 8,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        320: {
            slidesPerView: 4,
            spaceBetween: 0,

        },
        768: {
            slidesPerView: 5,
            spaceBetween: 0,

        },
        991: {
            slidesPerView: 6,
            spaceBetween: 0,

        },
        1024: {
            slidesPerView: 8,
            spaceBetween: 0,

        },
    }
  });
  var swiper2 = new Swiper(".milestone-swiper", {
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper_btn_next',
        prevEl: '.swiper_btn_prev',
    },
    thumbs: {
      swiper: swiper,
    },
});

// Other Director Swiper 
var swiper = new Swiper('.other_director', {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper_btn_next',
        prevEl: '.swiper_btn_prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1.3,
            spaceBetween: 10
        },
        480: {
            slidesPerView: 2.3,
            spaceBetween: 10
        },
        640: {
            slidesPerView: 2.2,
            spaceBetween: 10
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 10
        }

    }
})

// Other Document Categories Swiper 
var swiper = new Swiper('.small_card_swiper', {
    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints: {
        318: {
            slidesPerView: 1.5,
            spaceBetween: 10
        },
        480: {
            slidesPerView: 1.8,
            spaceBetween: 10
        },
        575: {
            slidesPerView: 2.3,
            spaceBetween: 10
        },
        768: {
            slidesPerView: 2.8,
            spaceBetween: 10
        },
        991: {
            slidesPerView: 4,
            spaceBetween: 10
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 30
        }
    }
})



//Font Change
$(document).ready(function() {
    $('.big-a').click(function() {
        $('.small-a').removeClass("active");
        $(this).addClass("active");
        var curr_font_size = $('.camp-desc').css('font-size');
        var new_font_size = parseFloat(curr_font_size) + 1;
        $('.camp-desc').animate({ fontSize: new_font_size }, 50);
    });

    $('.small-a').click(function() {
        $('.big-a').removeClass("active");
        $(this).addClass("active");
        var curr_font_size = $('.camp-desc').css('font-size');
        var new_font_size = parseFloat(curr_font_size) - 1;
        $('.camp-desc').animate({ fontSize: new_font_size }, 50);
    });
});


//Blog Pagination swiper
var blogThumbs = new Swiper('.blog-thumbs', {
    spaceBetween: 0,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});
var blogTop = new Swiper('.blog-top-swiper', {
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: blogThumbs
    },

});

//three-col-swiper
var threeColSwiper = new Swiper('.three-col-swiper', {
    spaceBetween: 0,
    slidesPerView: 3,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0,

        },
        768: {
            slidesPerView: 3,
            spaceBetween: 0,

        },
    }
});


//Youtube Video
// $(".video_source").hide();
// $("#play_icon").click(function() {
//     $(".video_overlay_bg").hide();
//     $(".video_source").show();
//     $("#youtube_video")[0].src += "?autoplay=1";
//     $("#youtube_video").show();
// });


//Header Fixed
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 30) {
            $('.ioh_megamenu').addClass('fixed');
            $('.top_header').addClass('remove');
            $('.header_alerts').addClass('remove');
        } else {
            $('.ioh_megamenu').removeClass('fixed');
            $('.top_header').removeClass('remove');
            $('.header_alerts').removeClass('remove');
        }
    });
});

//Tab to Accordion
$('.title_menu_navbar')
.on("click", "li button:not('.active')", function(event) { 
    $(this).closest('ul').removeClass("open");
})
.on("click", "li button.active", function(event) { 
    $(this).closest('ul').toggleClass("open");
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

$(document).ready(function(){
    $(this).scrollTop(0);
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