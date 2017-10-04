$(document).ready(function () {
    $('.sliders').owlCarousel({
        items: 1,
        nav: true,
        autoplay: true,
        //animateOut: 'fadeOut',
        animateIn: 'flipInX',
        smartSpeed: 100,
        loop: true,
        pullDrag: false,
        mouseDrag: false,
        dots:false,
        navText: ['<i class="fa fa-plus"></i>', '<i class="fa fa-minus"></i>'],
    });
    $('a.search').click(function(){
        $('.header-search-bar form').toggleClass('opacity');
    });
    $('.people-slider').owlCarousel({
        items: 2,
        navigation: true,
        autoplay: false,
        loop: true,
        pullDrag: false,
        mouseDrag: false,
        dots: true,
    });

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    $('#datepicker').datepicker();
    
    
    // Scrolling To Target DIV
    $('a[href^="#"]').bind('click.smoothscroll',function (e) {
      e.preventDefault();
      var target = this.hash,
      $target = $(target);

      $('html, body').stop().animate( {
        'scrollTop': $target.offset().top
      }, 700, 'swing', function () {
        window.location.hash = target;
        window.scrollBy(0,-100);
      } );
    });
    
    $('.main-menu .navigation li a').click(function(){
        $('a').removeClass('a-active');
        $(this).addClass('a-active');
        $('a.home-link').removeClass('a-active');
    });
    $('.responsive-menu').slicknav();
    
    $(window).scroll(function() {
      if ($(this).scrollTop() > 10){  
        $('.main-menu').addClass("sticky");
        $('.main-menu .container').addClass("static");
      }
      else{
        $('.main-menu').removeClass("sticky");
        $('.main-menu .container').removeClass("static");
      }
    });
});