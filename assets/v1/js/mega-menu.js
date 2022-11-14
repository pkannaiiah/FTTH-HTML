jQuery(document).ready(function($) {
    //mobile - open lateral menu clicking on the menu icon
    $('.ioh_humburger').on('click', function(event) {
        event.preventDefault();
        if ($('.ioh_megamenu').hasClass('nav_active')) {
            closeNav();
        } else {
            $(this).addClass('nav_active');
            $('.ioh_megamenu').addClass('nav_active');
            $('.ioh_nav_menu').addClass('nav_active');
            toggleSearch('close');
        }

    });

    //open search form
    $('.ioh_search_trigger').on('click', function(event) {
        event.preventDefault();
        toggleSearch();
        closeNav();
    });

    //prevent default clicking on direct children of .cd-primary-nav 
    $('.ioh_nav_menu').children().children('.nav_children').children('a').on('click', function(event) {
        // alert();
        event.preventDefault();
    });
    //open submenu
    $('.nav_children').children('a').on('click', function(event) {
        // if (!checkWindowWidth()) event.preventDefault();
        var selected = $(this);
        if (selected.next('.ioh_nav_second_level').hasClass('is-hidden')) {
            // alert("123");
            //desktop version only
            selected.addClass('selected').next('.ioh_nav_second_level').removeClass('is-hidden');
            selected.parent('.nav_children').siblings('.nav_children').children('.ioh_nav_second_level').addClass('is-hidden').end().children('a').removeClass('selected');
            $('.cd-overlay').addClass('is-visible');
        } else {
            // alert("321");
            selected.removeClass('selected').next('.ioh_nav_second_level').addClass('is-hidden');
        }
        toggleSearch('close');
    });

    //submenu items - go back link
    $('.back_menu').on('click', function() {
        $(this).parent().parent('.ioh_nav_second_level').addClass('is-hidden');
    });

    function closeNav() {
        $('.ioh_humburger').removeClass('nav_active');
        $('.ioh_megamenu').removeClass('nav_active');
        $('.ioh_nav_menu').removeClass('nav_active');
        $('.nav_children .ioh_nav_second_level').addClass('is-hidden');
        $('.nav_children a').removeClass('selected');
    }

    function toggleSearch(type) {
        if (type == "close") {
            //close serach 
            $('.ioh_search').removeClass('is-visible');
            $('.ioh_search_trigger').removeClass('search-is-visible');
        } else {
            //toggle search visibility
            $('.ioh_search').toggleClass('is-visible');
            $('.ioh_search_trigger').toggleClass('search-is-visible');
            // if ($(window).width() > MqL && $('.ioh_search').hasClass('is-visible')) $('.ioh_search').find('input[type="search"]').focus();
            // ($('.ioh_search').hasClass('is-visible')) ? $('.cd-overlay').addClass('is-visible'): $('.cd-overlay').removeClass('is-visible');
        }
    }

    //Header Navigation Height & Top value
    // if ($(window).width() > 991.98) {
    //     $(window).scroll(function() {
    //         var fx_head = $('.ioh_megamenu').outerHeight();
    //         $('.ioh_nav_second_level').css('top', fx_head);
    //     });
    //     var fx_head = $('.ioh_megamenu').outerHeight();
    //     $('.ioh_nav_second_level').css('top', fx_head);
    // }
});