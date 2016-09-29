jQuery(document).ready(function ($) {

  $(".trimmed").dotdotdot({});

  $('.btn-navbar').click(function () {
    if (!$('.nav-collapse').hasClass('in')) {
      $(this).text('Close');
    } else {
      $(this).text('Menu');
    }
  });

// Tweeter
  $("div.tweeter.carousel > ul").addClass("carousel-inner");
  $("div.tweeter.carousel > ul li").addClass("item");
  $("div.tweeter.carousel > ul li:nth-child(1)").addClass("active");

// cycling for carousel
  $(".carousel.ticker").carousel({interval: 6000});
  $(".carousel.cycle").carousel({interval: 8000});

// allow button to hide elements
  $(".hide-it").click(function () {
    $(".hide-me").hide("slow");
  });

// button for mailchimp form
  $("div.nm_mc_form input.nm_mc_button").addClass("btn btn-primary");
  
});