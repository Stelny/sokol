$(document).ready(function(){
  $('.first-button').on('click', function () {
      $('.animated-icon1').toggleClass('open');
      $('.header-menu').toggleClass('open');
    });
   /* 
    var partners = $('.partners__carousel');

    partners.owlCarousel({
      loop:true,
      margin:50,
      nav:false,
      dots:false,
      responsive:{
          0:{
              items:2
          },
          500:{
            items:3
          },
          776:{
            items:4
          },
          991:{
            items:5
          },
          1200:{
              items:6
          },
      }
  })

  $('.partners .nav-circle.right').click(function(e) {
    e.preventDefault();
    partners.trigger('next.owl.carousel');
    })

    $('.partners .nav-circle.left').click(function(e) {
        e.preventDefault();
        partners.trigger('prev.owl.carousel');
    })


    var learn = $('.learning__carousel');

    learn.owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      dots:false,
      responsive:{
          0:{
              items:2
          },
          500:{
            items:3
          },
          776:{
            items:3
          },
          991:{
            items:4
          },
          1200:{
              items:5
          },
      }
  })*/


  $(".banner_carousel").owlCarousel({
       items: 1,
       nav: false,
       loop: true,
       dots: true,
       autoplay: true,
       autoplayTimeout: 5000
   });


})
