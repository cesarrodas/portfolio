//https://www.dropbox.com/s/i45uasqo0inp04a/lunar_space.jpg?raw=1
$(document).ready(function() {
  var page;
  var sectionID2;
  setBindings();
});

function setBindings() {
  $('nav a').click(function(e){
    e.preventDefault();
    if($(document).width() <= 767){
      $('.navbar-toggle').click();
    }
    var sectionID = "#page_" + e.currentTarget.id;

    $('html, body').animate({
      scrollTop: ($(sectionID).offset().top - 50)
    }, 800)

  })
}

function scrolling(toPage){
  $('html, body').animate({
    scrollTop: ($(toPage).offset().top - 50)
  }, 800)
}



// Makes the current page active on the navbar.
$(window).scroll(function(){
  var page1 = $('#page_1').offset();
  var page2 = $('#page_2').offset();
  var page3 = $('#page_3').offset();
  var page4 = $('#page_4').offset();

  if($(window).scrollTop() >= page1.top - 200) { // 51$(document).height()*0.5
    $(".nav").find(".active").removeClass("active");
    $('#home').addClass('active');
    page = 1;
  }
  if($(window).scrollTop() >= page2.top - 200) {
    $(".nav").find(".active").removeClass("active");
    $('#about').addClass('active');
    page = 2;
  }
  if($(window).scrollTop() >= page3.top -200) {
    $(".nav").find(".active").removeClass("active");
    $('#portfolio').addClass('active');
    page = 3;
  }
  if($(window).scrollTop() >= page4.top - 300) {
    $(".nav").find(".active").removeClass("active");
    $('#contact').addClass('active');
    page = 4;
  }
})

// original scroll function by Josiah Ruddell on stackoverflow
// cool scroll function I found.
/*
var lastScrollTop = 0;
$(window).scroll(function(event){
   if($(document).width() >= 767){
      var st = $(this).scrollTop();
      if (st > lastScrollTop){
      // downscroll code
      } else if (st < lastScrollTop - 50) {
      // upscroll code
      }
      lastScrollTop = st;
   }
});
*/