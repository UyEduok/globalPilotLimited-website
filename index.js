
$(document).ready(function() {

  function addGradientBackground() {
    $(this).addClass('gradient-background');
  }

  function removeGradientBackground() {
    $(this).removeClass('gradient-background');
  }


  $('.t-nav-link').hover(addGradientBackground, removeGradientBackground);
  $('.dropdown-item').hover(addGradientBackground, removeGradientBackground);
  $('.back-to-top-button').hover(addGradientBackground, removeGradientBackground);

  const backToTopButton = document.getElementById('backToTopButton');

  $(window).scroll(function() {
    if ($(this).scrollTop() > 20) {
    
      $('.navbar').addClass('scrolled-navbar');
      $('.navbar').removeClass('nav-size');
      backToTopButton.style.display = 'block';

   
      $('.navbar .t-nav-link').addClass('text-black');
      $('.ellipsis-button').addClass('text-black');
    } else {
   
      $('.navbar').removeClass('scrolled-navbar');
      $('.navbar').addClass('nav-size');
      backToTopButton.style.display = 'none';

   
      $('.navbar .t-nav-link').removeClass('text-black');
      $('.ellipsis-button').removeClass('text-black');
    }
  });
});


function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}


document.addEventListener('DOMContentLoaded', function () {
 
  const tNav = document.querySelector('.t-nav');
  const dropItems = document.querySelectorAll('.drop-item');


  dropItems.forEach((item) => {
    item.addEventListener('mouseover', function () {

      tNav.classList.add('gradient-background');
    });

    item.addEventListener('mouseout', function () {
    
      tNav.classList.remove('gradient-background');
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {

  const ellipsisBtn = document.querySelector('.ellipsis-button');
  const ellipsisItems = document.querySelectorAll('.ellipsis-items');


  ellipsisItems.forEach((item) => {
    item.addEventListener('mouseover', function () {
    
      ellipsisBtn.classList.add('white-text');
    });

    item.addEventListener('mouseout', function () {
  
      ellipsisBtn.classList.remove('white-text');
    });
  });
});

$(document).ready(function () {

  $('#carouselExampleIndicators').carousel();


  $('#carouselExampleIndicators').on('slide.bs.carousel', function (event) {
    var activeSlide = $(event.relatedTarget);
    var titleElement = activeSlide.find('.carousel-slide-in-top');
    var textElement = activeSlide.find('.carousel-slide-in-bottom');


    titleElement.addClass('carousel-slide-in-top');
    textElement.addClass('carousel-slide-in-bottom');

    
    titleElement.siblings('.carousel-slide-in-top').removeClass('carousel-slide-in-top');
    textElement.siblings('.carousel-slide-in-bottom').removeClass('carousel-slide-in-bottom');
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const peopleTitle = document.querySelector(".people-heading");
  const learnBtn = document.querySelector(".btn-learn");
  const joinBtn = document.querySelector(".btn-join");
  const gplPeople = document.querySelector(".gpl-people-sect"); 

  window.addEventListener("scroll", function() {
    const scrollPosition = window.innerHeight + window.scrollY;
    const gplPeoplePosition = gplPeople.offsetTop; 

    if (scrollPosition > gplPeoplePosition) {
      peopleTitle.classList.add("slide-in-footer-side-left");
      learnBtn.classList.add("slide-in-footer");
      joinBtn.classList.add("slide-in-footer");
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const connectTitle = document.querySelector(".connect-heading");
  const connectText = document.querySelector(".connect-text");
  const connectBtn = document.querySelector(".connect-btn");
  const connect = document.querySelector(".connect-sect"); 

  window.addEventListener("scroll", function() {
    const scrollPosition = window.innerHeight + window.scrollY;
    const connectPosition = connect.offsetTop;

    if (scrollPosition > connectPosition) {
      connectTitle.classList.add("slide-in-footer-side-left");
      connectText.classList.add("slide-in-footer-side");
      connectBtn.classList.add("slide-in-footer-side-left");
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const footerLogo = document.querySelector(".footer-logo");
  const footerF = document.querySelector(".footer-f");
  const footerS = document.querySelector(".footer-s");
  const footerT = document.querySelector(".footer-t");
  const footerFo = document.querySelector(".footer-fo");
  const footer = document.querySelector(".footer-sect"); 

  window.addEventListener("scroll", function() {
    const scrollPosition = window.innerHeight + window.scrollY;
    const footerPosition = footer.offsetTop; 

    if (scrollPosition > footerPosition) {
      footerLogo.classList.add("slide-in-footer-side-left");
      footerS.classList.add("slide-in-footer");
      footerT.classList.add("slide-in-footer-side");
      footerF.classList.add("slide-in-footer");
      footerFo.classList.add("slide-in-footer");
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {

  setTimeout(function () {
     
      document.getElementById("splash-logo").style.opacity = 0;
      setTimeout(function () {
          document.getElementById("splash-logo").style.display = "none";
          document.getElementById("main-content").style.display = "block";
      }, 1000); 
  }, 1000);
});






