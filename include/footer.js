var okfn_word_slider = $('.okfn-word-slider');
var total_words = okfn_word_slider.children().size();
var last_number = 0;

function get_random_number(max) {
  return Math.floor((Math.random() * max + 1));
}

function random_words_slider() {

  // Don't animate if only one word is available
  if (total_words < 2) {
    return;
  }

  // Pick a random number
  var random_number = get_random_number(total_words);
  // console.log('Random number is: ' + random_number);

  // Check if the last number is not the same as the random one
  while (random_number === last_number) {
    // Remember the last number
    random_number = get_random_number(total_words);
  }
  // Hide all elements
  okfn_word_slider.children().css({'display': 'none'});
  okfn_word_slider.children('span:nth-child(' + random_number + ')').css({'display': 'inline-block'});
  last_number = random_number;
}

jQuery(document).ready(function ($) {

  random_words_slider();
  var random_words = setInterval(random_words_slider, 4950);

  $(".trimmed").dotdotdot({});

  $('.btn-navbar').click(function () {
    if (!$('.nav-collapse').hasClass('in')) {
      $(this).text('Close');
    } else {
      $(this).text('Menu');
    }
  });

  $('.widgettitle').each(function () {
    var me = $(this);
    me.addClass('uppercase-lowercase');
    me.html(me.text().replace(/(^\w+)/, '<strong>$1</strong>'));
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