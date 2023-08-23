



$(document).ready(function(){ 
    // sticky menu===================
    var wind = $(window);
    var sticky = $('#sticky-header');
    wind.on('scroll', function () {
        var scroll = wind.scrollTop();
        if (scroll <100) {
            sticky.removeClass('sticky-nav');
        } else {
            sticky.addClass('sticky-nav');
        }
    });
});


    // Mobile Menu
    $('.mobile-menu nav').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: ".mobile-menu",
        meanMenuOpen: "<span></span> <span></span> <span></span>",
        onePage: false,
    }); 

// slider Active
$('.slider-list').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 10000,
    dots: false,
    dotsEach:false,
    nav: true,
    navText: ["next", "<i class='fas fa-chevron-right''></i>"],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 1
        },
        992: {
            items: 1
        },
        1000: {
            items: 1
        },
        1920: {
            items: 1
        }
    }
})

// slider Active
$('.testi-list').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 10000,
    dots: false,
    dotsEach:false,
    nav: true,
    navText: ["<i class='fas fa-chevron-left''></i>", "<i class='fas fa-chevron-right''></i>"],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 1
        },
        992: {
            items: 1
        },
        1000: {
            items: 1
        },
        1920: {
            items: 1
        }
    }
})

// slider Active
$('.portfolio-list').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 20000,
    dots: false,
    dotsEach:false,
    margin:33,
    nav: false,
    navText: ["<i class='fas fa-chevron-left''></i>", "<i class='fas fa-chevron-right''></i>"],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        },
        1000: {
            items: 5
        },
        1920: {
            items: 5
        }
    }
})


// Loder  //
$(function () {
    $('body').addClass('loaded');
  });

 // table tabs
        
 $(document).ready(function() { 

    (function ($) { 
        $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
        
        $('.tab ul.tabs li a').click(function (g) { 
            var tab = $(this).closest('.tab'), 
            index = $(this).closest('li').index();
            
            tab.find('ul.tabs > li').removeClass('current');
            $(this).closest('li').addClass('current');
            
            tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
            tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
            
            g.preventDefault();
        } );
    })(jQuery);

});



(function($) {
    'use strict';
	//Header Search
	if($('.search-box-outer').length) {
		$('.search-box-outer').on('click', function() {
			$('body').addClass('search-active');
		});
		$('.close-search').on('click', function() {
			$('body').removeClass('search-active');
		});
	}
	
    / Portfolio Isotope  /
    $('.image_load').imagesLoaded(function() {

        if ($.fn.isotope) {

            var $portfolio = $('.image_load');

            $portfolio.isotope({

                itemSelector: '.grid-item',

                filter: '*',

                resizesContainer: true,

                layoutMode: 'masonry',

                transitionDuration: '0.8s'

            });
            $('.menu-filtering li').on('click', function() {

                $('.menu-filtering li').removeClass('current_menu_item');

                $(this).addClass('current_menu_item');

                var selector = $(this).attr('data-filter');

                $portfolio.isotope({

                    filter: selector,

                });

            });

        };

    });
	
		    // Venubox

    $('.venobox').venobox({

        numeratio: true,

        infinigall: true

    });
	
	
// Loder  
    $(function () {
      $('body').addClass('loaded');
    }); 

 
 // counterUp
 $('.counter').counterUp({
    delay: 5,
    time: 1000
});
   


// slider Active
$('.brand-list').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 20000,
    dots: false,
    dotsEach:false,
    margin:33,
    nav: false,
    navText: ["<i class='fas fa-chevron-left''></i>", "<i class='fas fa-chevron-right''></i>"],
    responsive: {
        0: {
            items: 2
        },
        768: {
            items: 4
        },
        992: {
            items: 5
        },
        1000: {
            items: 5
        },
        1920: {
            items: 5
        }
    }
});

// scroll strat============================

         $(window).on('scroll', function () {
        var scrolled = $(window).scrollTop();
        if (scrolled > 300) $('.go-top').addClass('active');
        if (scrolled < 300) $('.go-top').removeClass('active');
    });

    $('.go-top').on('click', function () {
        $("html, body").animate({
            scrollTop: "0"
        }, 1200);
    });

    / Portfolio Isotope  /
    $('.image_load').imagesLoaded(function() {

        if ($.fn.isotope) {

            var $portfolio = $('.image_load');

            $portfolio.isotope({

                itemSelector: '.grid-item',

                filter: '*',

                resizesContainer: true,

                layoutMode: 'masonry',

                transitionDuration: '0.8s'

            });
            $('.menu-filtering li').on('click', function() {

                $('.menu-filtering li').removeClass('current_menu_item');

                $(this).addClass('current_menu_item');

                var selector = $(this).attr('data-filter');

                $portfolio.isotope({

                    filter: selector,

                });

            });

        };

    });



$.scrollUp({
    scrollName: 'scrollUp', // Element ID
    topDistance: '300', // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: '<i class="fas fa-angle-double-up"></i>', // Text for element
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });


 // Calender Jquery
        var curDate = (new Date()).getDate();
        var curMonth = (new Date()).getMonth();
        var curYear = (new Date()).getFullYear();
        var startDay = (new Date(curYear, curMonth, 1)).getDay();
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var noofdays = ["31", "29", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"];
        var prevMonth = noofdays[curMonth - 1];
        if (curMonth == 11) {
        prevMonth = noofdays[0]
        } else if (curMonth == 0) {
        prevMonth = noofdays[11]
        };
        var totalDays = noofdays[curMonth];
        var counter = 0;
        var precounter = prevMonth - (startDay - 1);
        var rightbox = 6;
        var flag = true;

        jQuery('.curr-month b').text(months[curMonth]);
        for (var i = 0; i < 42; i++) {
        if (i >= startDay) {
        counter++;
        if (counter > totalDays) {
        counter = 1;
        flag = false;
        }
        if (flag == true) {
        jQuery('.all-date ul').append('<li class="monthdate">' + counter + '</li>');
        } else {
        jQuery('.all-date ul').append('<li style="opacity:.8">' + counter + '</li>');
        }
        } else {
        jQuery('.all-date ul').append('<li style="opacity:.8">' + precounter + '</li>');
        precounter++;
        }

        if (i == rightbox) {
        jQuery(jQuery('.all-date ul li')[rightbox]).addClass("b-right");
        rightbox = rightbox + 7;
        }

        if (i > 34) {
        jQuery(jQuery('.all-date ul li')[i]).addClass("b-bottom");
        }

        if ((jQuery(jQuery('.all-date ul li')[i]).text() == curDate) && (jQuery(jQuery('.all-date ul li')[i]).css('opacity') == 1)) {
        jQuery(jQuery('.all-date ul li')[i]).css({
        "background-color": "#02548b",
        "color": "#fff"
        });
        }
        };


(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "09/30/",
      birthday = dayMonth + yyyy;
  
  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end
  
  const countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    

        const now = new Date().getTime(),
              distance = countDown - now;

       

        //do something later when date is reached
        if (distance < 0) {
          document.getElementById("headline").innerText = "It's my birthday!";
          document.getElementById("countdown").style.display = "none";
          document.getElementById("content").style.display = "block";
          clearInterval(x);
        }
        //seconds
      }, 0)
  }());


 
    
	/*--------------------------
     scrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    })
})(jQuery);




