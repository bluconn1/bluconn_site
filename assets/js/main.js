(function ($) {
  $(document).ready(function () {
    //mobile menu active
    if ($("#mobile-menu").length > 0) {
      //Mobile menu
      $("#mobile-menu").meanmenu({
        meanMenuContainer: ".mobile-menu",
        meanScreenWidth: "991",
      });

      $(".mobile-menu-bar").on("click", function () {
        $(".sidebar-main").addClass("active");
      });
      $(".sidebar-close").on("click", function () {
        $(".sidebar-main").removeClass("active");
      });
    }

    //Video poppup
    if ($(".play-btn").length > 0) {
      $(".play-btn").magnificPopup({
        type: "iframe",
      });
    }

       // counter-up
       $(".counter").countUp();

    //Post gallary slider
    const blog_gallary = $(".gallary-slider");
    if (blog_gallary.length > 0) {
      //Blog Gallary
      blog_gallary.owlCarousel({
        loop: true,
        autoHeight: true,
        nav: true,
        navText: [
          "<i class='fa-solid fa-angle-left'></i>",
          "<i class='fa-solid fa-angle-right'></i>",
        ],
        dots: false,
        items: 1,
      });
    }

    // sticky header active
    if ($("#header").length > 0) {
      $(window).on("scroll", function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 1) {
          $("#header").removeClass("sticky");
        } else {
          $("#header").addClass("sticky");
        }
      });
    }

    
    // sticky header active
    if ($("#header2").length > 0) {
      $(window).on("scroll", function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 1) {
          $("#header2").removeClass("sticky2");
        } else {
          $("#header2").addClass("sticky2");
        }
      });
    }

    //demo sidebar active
    const demosIcon = $("#demosIcon, .demos");
    const demoSidebar = $("#demo-sidebar");
    demosIcon.on("click", function (e) {
      e.preventDefault();
      demoSidebar.toggleClass("active-sidebar");
    });
  });

      // pricing-plan-tab
      $("#ce-toggle").click(function (event) {
        $(".plan-toggle-wrap").toggleClass("active");
      });
  
      $("#ce-toggle").change(function () {
        if ($(this).is(":checked")) {
          $(".tab-content #yearly").hide();
          $(".tab-content #monthly").show();
        } else {
          $(".tab-content #yearly").show();
          $(".tab-content #monthly").hide();
        }
      });
  
      $(".trusred-slider-all").owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        // autoplay: true,
        // autoplayTimeout: 3000,
        items: 1,
        autoplay: true,
       autoplayTimeout: 5000,
      smartSpeed: 1000,
      slideSpeed: 600,
        navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
      });


    //owl-carousel-slider-home5
    $(".brand2-slider").owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      dots: false,
      autoplay: true,
       autoplayTimeout: 3000,
      smartSpeed: 1000,
      slideSpeed: 600,
      responsive: {
        0: {
          items: 2,
        },
        900: {
          items: 4,
        },
      },
    });

        //owl-carousel-slider-aobut-page
        $(".slider-all").owlCarousel({
          loop: true,
          margin: 10,
          nav: false,
          dots: true,
          smartSpeed: 1000,
          slideSpeed: 600,
          responsive: {
            0: {
              items: 1,
            },
            900: {
              items: 4,
            },
          },
        });


         //owl-carousel-tes6 slider
         $(".tes6-slider-all").owlCarousel({
          loop: true,
          margin: 10,
          nav: true,
          dots: true,
          smartSpeed: 1000,
          slideSpeed: 600,
          navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
          responsive: {
            0: {
              items: 1,
            },
            900: {
              items: 2,
            },
          },
        });


     //owl-carousel-slider-home4
     $(".brand4-slider-all").owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      dots: false,
      autoplay: true,
       autoplayTimeout: 3000,
      smartSpeed: 1000,
      slideSpeed: 600,
      responsive: {
        0: {
          items: 2,
        },
        900: {
          items: 5,
        },
      },
    });

    $(".brand-area-all").owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      dots: false,
      autoplay: true,
       autoplayTimeout: 1000,
      smartSpeed: 2000,
      slideSpeed: 600,
      responsive: {
        0: {
          items: 2,
        },
        900: {
          items: 8,
        },
      },
    });

    // home2 slider testimonial
    $(".testimonial2-slider-all").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      dots: false,
      autoplay: true,
      autoplayTimeout: 6000,
      smartSpeed: 2000,
      slideSpeed: 600,
      navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
      responsive: {
        0: {
          items: 1,
        },
        900: {
          items: 2,
        },
      },
    });

     // home3 featured slider testimonial
     $(".featured-slider").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      dots: false,
      autoplay: true,
      autoplayTimeout: 6000,
      smartSpeed: 1500,
      slideSpeed: 600,
      navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
      responsive: {
        0: {
          items: 1,
        },
        900: {
          items: 3.4,
        },
      },
    });

     // home3 tistimonial slider testimonial
     $(".testimonial3-slider").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      dots: false,
      autoplay: true,
      autoplayTimeout: 6000,
      smartSpeed: 1500,
      slideSpeed: 600,
      navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
      responsive: {
        0: {
          items: 1,
        },
        900: {
          items: 1,
        },
      },
    });


         // home5 tistimonial slider industries
         $(".industries-slider").owlCarousel({
          loop: true,
          margin: 10,
          nav: true,
          dots: false,
          // autoplay: true,
          // autoplayTimeout: 6000,
          // smartSpeed: 1500,
          slideSpeed: 600,
          navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
          responsive: {
            0: {
              items: 1,
            },
            900: {
              items: 3,
            },
          },
        });


        
         // home5 tistimonial slider testimonial
         $(".tes5-slider").owlCarousel({
          loop: true,
          margin: 10,
          nav: false,
          dots: true,
          // autoplay: true,
          // autoplayTimeout: 6000,
          // smartSpeed: 1500,
          slideSpeed: 600,
          navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
          responsive: {
            0: {
              items: 1,
            },
            900: {
              items: 3,
            },
          },
        });

         // home8 tistimonial slider
         $(".tes8-parent-slider").owlCarousel({
          loop: true,
          margin: 10,
          nav: true,
          dots: true,
          // autoplay: true,
          // autoplayTimeout: 6000,
          // smartSpeed: 1500,
          slideSpeed: 600,
          navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
          responsive: {
            0: {
              items: 1,
            },
            900: {
              items: 3,
            },
          },
        });

                 // home10 tistimonial slider
                 $(".hero10-slider-perrent").owlCarousel({
                  loop: true,
                  margin: 10,
                  nav: true,
                  dots: true,
                  // autoplay: true,
                  // autoplayTimeout: 6000,
                  animateOut: 'fadeOut',
                  smartSpeed: 1500,
                  slideSpeed: 600,
                  navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
                  responsive: {
                    0: {
                      items: 1,
                    },
                    900: {
                      items: 1,
                    },
                  },
                });


    // jQuery('.stellarnav').stellarNav();

//   $('.hero10-slider-perrent').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     asNavFor: '.testimonial-arrows',
//     dots: false,
//     loop:true,
//     centerMode: false,
//     focusOnSelect: true,
//     arrows: false,
//  });
 

//  $('.testimonial-arrows').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//     prevArrow: $('.testimonial-prev-arrow'),
//     nextArrow: $('.testimonial-next-arrow'),
//     fade: true,
//     loop:true,
//     asNavFor: '.hero10-slider-perrent',
//     autoplay: true,
//     autoplaySpeed: 2000,
//    });




     // sticky header active
     if ($("#header").length > 0) {
      $(window).on("scroll", function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 1) {
          $("#header").removeClass("sticky");
        } else {
          $("#header").addClass("sticky");
        }
      });
    }

    // home page slider

    $('.homepage-slides').owlCarousel({
      items: 1,
      dots: true,
      nav: false,
      loop: true,
       autoplay: true,
       autoplayTimeout: 5000,
      smartSpeed: 2000,
      slideSpeed: 600,
       //animateOut: 'slideOutDown',
       //animateIn: 'flipInX',
      navText: ["<i class='la la-angle-left'></i>", "<i class='la la-angle-right'></i>"],
      responsive: {
        0: {
          items: 1,
          nav: false,
          dots: false,
          
        },
        600: {
          items: 1,
          nav: false,
          dots: false,
          
        },
        768: {
          items: 1,
          
        },
        1100: {
          items: 1,					
        }
      }
    });

      // check redio
  const color = $(".checkout-input-selact");

  color.on("click", function () {
    $(".checkout-input-selact").removeClass("active");
    $(this).addClass("active");
  });

        // btn_theme
        $(function() {  
          $('.btn_theme')
            .on('mouseenter', function(e) {
                    var parentOffset = $(this).offset(),
                      relX = e.pageX - parentOffset.left,
                      relY = e.pageY - parentOffset.top;
                    $(this).find('span').css({top:relY, left:relX})
            })
            .on('mouseout', function(e) {
                    var parentOffset = $(this).offset(),
                      relX = e.pageX - parentOffset.left,
                      relY = e.pageY - parentOffset.top;
                $(this).find('span').css({top:relY, left:relX})
            });
        });
        
  
    $(".homepage-slides").on("translate.owl.carousel", function () {
      $(".single-slide-item h3")
              .removeClass("animated fadeInUp")
              .css("opacity", "1");
          $(".single-slide-item h1")
              .removeClass("animated fadeInDown")
              .css("opacity", "1");        
          $(".single-slide-item p")
              .removeClass("animated fadeInUp")
              .css("opacity", "1");
          $(".single-slide-item .main-btn")
              .removeClass("animated fadeInDown")
              .css("opacity", "1");
      });
  
      $(".homepage-slides").on("translated.owl.carousel", function () {
      $(".single-slide-item h3")
              .addClass("animated fadeInUp")
              .css("opacity", "1");
          $(".single-slide-item h1")
              .addClass("animated fadeInDown")
              .css("opacity", "1");        
          $(".single-slide-item p")
              .addClass("animated fadeInUp")
              .css("opacity", "1");
          $(".single-slide-item .main-btn")
              .addClass("animated fadeInDown")
              .css("opacity", "1");
      });
  


    

  // home4-header-video
  new ModalVideo(".video-action-btn1");

  // pricing-plan-tab
  $("#ce-toggle").click(function (event) {
    $(".plan-toggle-wrap").toggleClass("active");
  });

  $("#ce-toggle").change(function () {
    if ($(this).is(":checked")) {
      $(".tab-content #yearly").hide();
      $(".tab-content #monthly").show();
    } else {
      $(".tab-content #yearly").show();
      $(".tab-content #monthly").hide();
    }
  });

  // minus

  $(".minus").click(function () {
    var $input = $(this).parent().find("input");
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });

  $(".plus").click(function () {
    var $input = $(this).parent().find("input");
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
  

    // page-progress
    var progressPath = document.querySelector(".progress-wrap path");
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "stroke-dashoffset 10ms linear";
    var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 50;
    var duration = 550;
    jQuery(window).on("scroll", function () {
      if (jQuery(this).scrollTop() > offset) {
        jQuery(".progress-wrap").addClass("active-progress");
      } else {
        jQuery(".progress-wrap").removeClass("active-progress");
      }
    });
    jQuery(".progress-wrap").on("click", function (event) {
      event.preventDefault();
      jQuery("html, body").animate({ scrollTop: 0 }, duration);
      return false;
    });

    

    AOS.init({
      offset: 100,
      duration: 400,
      easing: "ease-in-out",
      anchorPlacement: "top-bottom",
      disable: "mobile",
    });

    $('select').niceSelect();


   //  preloader
  $(window).on("load", function (event) {
    setTimeout(function () {
      $(".theme-loader").fadeToggle();
    }, 1500);
  });

  function _drawAnimated(v) {
    $(canvas).stop(true, true).css({ value: 0 }).animate({ value: v }, $.extend({}, options.animation, {
          step: function(p) {
              _draw(p);
              $(canvas).trigger('circle-animation-progress', [p / v, p]);
          },
  
          complete: function() {
              $(canvas).trigger('circle-animation-end');
          }
      }));
  }
  

  




  // preloader
  // $(window).on("load", function (event) {
  //   setTimeout(function () {
  //     $("#preloader").fadeToggle();
  //   }, 1500);
  // });

  // $("select").niceSelect();

  
})(jQuery);




//line progress bar

let progress = $('#progress1').LineProgressbar({
  percentage: 90
});

let progress2 = $('#progress2').LineProgressbar({
  percentage: 80
});

let progress3 = $('#progress3').LineProgressbar({
  percentage: 92
});

// document.getElementById("animate").onclick = function () {
//   tl.restart();
// };

// function animateFrom(elem, direction) {
//   direction = direction || 1;
//   var x = 0,
//       y = direction * 100;
//   if(elem.classList.contains("gs_reveal_fromLeft")) {
//     x = -100;
//     y = 0;
//   } else if (elem.classList.contains("gs_reveal_fromRight")) {
//     x = 100;
//     y = 0;
//   }else if (elem.classList.contains("gs_reveal_fromBottom")) {
//     x = 0;
//     y = -100;
//   }
  
//   elem.style.transform = "translate(" + x + "px, " + y + "px)";
//   elem.style.opacity = "0";
//   gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
//     duration: 1.25, 
//     x: 0,
//     y: 0, 
//     autoAlpha: 1, 
//     ease: "expo", 
//     overwrite: "auto"
//   });
// }

// function hide(elem) {
//   gsap.set(elem, {autoAlpha: 0});
// }

// document.addEventListener("DOMContentLoaded", function() {
//   gsap.registerPlugin(ScrollTrigger);
  
//   gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
//     hide(elem); // assure that the element is hidden when scrolled into view
    
//     ScrollTrigger.create({
//       trigger: elem,
//       markers: false,
//       onEnter: function() { animateFrom(elem) }, 
//       onEnterBack: function() { animateFrom(elem, -1) },
//       onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
//     });
//   });
// });


// gsap.registerPlugin (ScrollTrigger);

// gsap.to(".square", {
// x: 100,
// duration: 3,
// scrollTrigger: {
// trigger: ".square", start: "top center",
// markers: true,
// }

// })


     // Price filtering
     (function () {
      var parent = document.querySelector("#rangeSlider");
      if (!parent) return;
    
      var rangeS = parent.querySelectorAll("input[type=range]"),
        numberS = parent.querySelectorAll("input[type=number]");
    
      rangeS.forEach(function (el) {
        el.oninput = function () {
          var slide1 = parseFloat(rangeS[0].value),
            slide2 = parseFloat(rangeS[1].value);
    
          if (slide1 > slide2) {
            [slide1, slide2] = [slide2, slide1];
          }
    
          numberS[0].value = slide1;
          numberS[1].value = slide2;
        };
      });
    
      numberS.forEach(function (el) {
        el.oninput = function () {
          var number1 = parseFloat(numberS[0].value),
            number2 = parseFloat(numberS[1].value);
    
          if (number1 > number2) {
            var tmp = number1;
            numberS[0].value = number2;
            numberS[1].value = tmp;
          }
    
          rangeS[0].value = number1;
          rangeS[1].value = number2;
        };
      });
    })();