$(document).ready(function() {
  // Set isotope with perfectMasonry
  $('header').imagesLoaded(function(){
    $('header').isotope({
      layoutMode: 'perfectMasonry',
      perfectMasonry: {
        columnWidth: 150, // Force columns to 150px wide
        rowHeight: 150,
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
         }
      }
    });
  });

  // this randomly sorts the images up top
  var divs = $(".crop").get().sort(function() {
  return Math.round(Math.random())-0.5;
  }).slice(0,21);
  $(divs).appendTo(divs[0].parentNode).show();

  // this finds the first image (newly sorted) and shows that profile
  var first_id = $('.crop').first().children('img').attr('id').replace('-pic', '-profile');
  $('.profile-slider '+ '#' + first_id).slideDown('slow').addClass('in-view');
  $('#main .profile-slider').css('border-bottom', '5px solid #F24738');
  var selected = first_id.replace('-profile', '');
  $('#' + selected).addClass('selected');

  // align box correctly
  // var height = $('header').height();
  // $('.hero-wrap').css('margin-top', ((height/2)-$('.hero-wrap').height()));
  // nav follows
  $(window).scroll(mobile_nav_bar);

  // highlight selected student
  $('.name-list span').on('click', show_profile);

  // this gets the links ready to be clickable in the nav bar
  $('#about-link').click(about_page);
  $('#students-link').click(students_page);
  $('#projects-link').click(projects_page);

  // this is snarky
  $('#visit_ga').on('mouseover', function(){
    $('footer').find('#snark').show();
  });
})

// this function brings you to about
function about_page(e) {
  e.preventDefault();
  var position = $('header').outerHeight() - 15
  $('html, body').animate({scrollTop:position}, 'slow');
}

// this function brings you to the students
function students_page(e) {
  e.preventDefault();
  var position = $('.name-list').parent().offset().top - 15
  $('html, body').animate({scrollTop:position}, 'slow');
}

// this function brings you to the projects
function projects_page(e) {
  e.preventDefault();
  var position = $('.profile-slider').next().offset().top - 15
  $('html, body').animate({scrollTop:position}, 'slow');
}

// this function shows the profile
function show_profile(e) {
  e.preventDefault();
  $('.name-list span').removeClass('selected', 300);
  $(this).addClass('selected', 300);
  var id = $(this).attr('id') + '-profile';
  $('.in-view').slideUp('slow').removeClass('in-view');
  $('.profile-slider '+ '#' + id).delay(600).slideDown('slow').addClass('in-view');
}

// this ensures the navbar moves around with the page
function mobile_nav_bar() {
  var aboveHeight = $('header').outerHeight();
  if ($(window).scrollTop() > aboveHeight){
    $('nav').addClass('fixed').css('top','0').next()
    .css('padding-top','60px');
  } else {
    $('nav').removeClass('fixed').next()
    .css('padding-top','0');
  }
}