var squaredot = squaredot || {};

$(document).ready(function(){

  squaredot.scripts = (function () {

    //detect if iphone4
    var isiPhone = navigator.userAgent.toLowerCase().indexOf("iphone");

    var calculateHeight = function(){
      var windowHeight = $(window).height();
      $('.bg-1, .bg-2, .bg-3, .bg-4, .bg-default').css('height', windowHeight);
    };

    if(isiPhone > -1){

      var iHeight = window.screen.height;

        if(iHeight >= 480 && iHeight <=960){
          $('.bg-1, .bg-2, .bg-3, .bg-4, .bg-default').css('height', '640px');
         }else{
          calculateHeight();
         }
    }else{
            calculateHeight();
          }


    var profileHoverStates = function(){

      if (Modernizr.mq('(min-width: 880px)')){

          $(".profile").hover(function(){
            $(this).find('.bio-wrapper').slideToggle('fast');
            $(this).find('.more').toggle();
            $(this).find('.overlay').toggleClass("reveal");
          });

      }
    };

    profileHoverStates();

    $('.bio > .more').on('click', function(){
      $('.bio-wrapper').hide();
      $(this).closest('.profile').find('.bio-wrapper').slideToggle('fast');
      $(this).closest('.profile').find('.bio-wrapper').toggleClass('open');
      $(this).closest('.profile').find('.overlay').toggleClass("reveal");
    });

    $('.bio-wrapper > .close').on('click',function(){
      $(this).closest('.profile').find('.bio-wrapper').slideToggle('fast');
      $(this).closest('.profile').find('.overlay').toggleClass("reveal");
    });

    $('.bio .less').on('click',function(){
      $(this).closest('.profile').find('.bio-wrapper').slideToggle('fast');
      $(this).closest('.profile').find('.overlay').toggleClass("reveal");
    });

    $(window).resize(function(){
      calculateHeight();
      profileHoverStates();
    });

    $('.expand-button').on('click', function(event){
      event.preventDefault();
      $(this).addClass('expand');
      $('nav, #fp-nav, .header-logo').hide();
      var section = $(this).attr('id');
      $("."+section+" .modal ").delay(250).show(0);
    });

    $('.close, .less.button').on('click', function(event){
      event.preventDefault();
      $('.modal').hide();
      $('.expand-button').removeClass('expand');
      $('nav, #fp-nav, .header-logo').show();
    });

    //hamburgerz
    $('#nav-toggle').on('click',function(event){
      event.preventDefault();
      $('nav.primary ul').toggleClass('open');
    });

    //tabs on work page
    $('.tab-a').on('click',function(){
      $(this).addClass('active');
      $('.tab-b').removeClass('active');
      $('.block-a').show();
      $('.block-b').hide();
    });
    $('.tab-b').on('click',function(){
      $(this).addClass('active');
      $('.tab-a').removeClass('active');
      $('.block-b').show();
      $('.block-a').hide();
    });

    //tabs on blog page
    $('.cat-a').on('click',function(){
      $(this).addClass('active');
      $('.cat-b').removeClass('active');
      $('.cat-c').removeClass('active');
      // $('.block-a').show();
      // $('.block-b').hide();
    });
    $('.cat-b').on('click',function(){
      $(this).addClass('active');
      $('.cat-a').removeClass('active');
      $('.cat-c').removeClass('active');
      // $('.block-b').show();
      // $('.block-a').hide();
    });
    $('.cat-c').on('click',function(){
      $(this).addClass('active');
      $('.cat-a').removeClass('active');
      $('.cat-b').removeClass('active');
      // $('.block-b').show();
      // $('.block-a').hide();
    });

    $(window).load(function(){
    //move ballon to focused input
      $("input[type='text'][name='firstname']").on('focus', function(){
        $('.balloon').animate({
          top: "-77"
        },500);
      });
      $("input[type='text'][name='lastname']").on('focus', function(){
        $('.balloon').animate({
          top: "5"
        },500);
      });
      $("input[type='email'][name='email']").on('focus', function(){
        $('.balloon').animate({
          top: "118"
        },500);
      });
      $("input[type='tel'][name='phone']").on('focus', function(){
        $('.balloon').animate({
          top: "198"
        },500);
      });
      $("input[type='text'][name='company']").on('focus', function(){
        $('.balloon').animate({
          top: "286"
        },500);
      });
    });

     $('.featured-book > .button').on('click', function(event){
    event.preventDefault();
      $('.map').fadeIn('fast');
      window.scrollTo(0, 0);
    });

     $('.map .close').on('click', function(){
      $('.map').fadeOut('fast');
     });

     $('.modal .close').on('click', function(){
      $('.modal').fadeOut('fast');
     });


    $('.featured-book > .button').on('click', function(){
      var link = $('#hs-link-book_image').attr('href');
      $(this).attr('href', link);
    });


    $('.book-download .button').on('click', function(){
      var link = $('#hs_cos_wrapper_CTA_image > a').attr('href');
      $(this).attr('href', link);
    });

    if($('.service').length>0){
        $('.service > a').on('click', function(){
            var url = $(this).parent().find('.services-text>p:last-child>a').attr('href');
            window.open(url,"_self");
        })
    }

  })();

});



