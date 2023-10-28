
$(document).ready(function() {
  // Function to add the "gradient-background" class on hover
  function addGradientBackground() {
    $(this).addClass('gradient-background');
  }

  // Function to remove the "gradient-background" class on mouseout
  function removeGradientBackground() {
    $(this).removeClass('gradient-background');
  }

  // Attach hover events to the navbar elements
  $('.t-nav-link').hover(addGradientBackground, removeGradientBackground);
  $('.dropdown-item').hover(addGradientBackground, removeGradientBackground);

  const backToTopButton = document.getElementById('backToTopButton');

  $(window).scroll(function() {
    if ($(this).scrollTop() > 20) {
      // Add the "scrolled-navbar" class to the navbar
      $('.navbar').addClass('scrolled-navbar');
      $('.navbar').removeClass('nav-size');
      backToTopButton.style.display = 'block';

      // Add the "text-black" class to change the text color
      $('.navbar .t-nav-link').addClass('text-black');
      $('.ellipsis-button').addClass('text-black');
    } else {
      // Remove the "scrolled-navbar" class
      $('.navbar').removeClass('scrolled-navbar');
      $('.navbar').addClass('nav-size');
      backToTopButton.style.display = 'none';

      // Remove the "text-black" class to change the text color back to its original color
      $('.navbar .t-nav-link').removeClass('text-black');
      $('.ellipsis-button').removeClass('text-black');
    }
  });

    // Add the "gradient-background" class to the offcanvas when the window width is less than or equal to 992px
    function addBackground() {
      $(this).addClass('gradient-background');
    }
  
    // Function to remove the "gradient-background" class on mouseout
    function removeBackground() {
      $(this).removeClass('gradient-background');
    }
  
    $('.back-to-top-button').hover(addGradientBackground, removeBackground);
});

// Function to scroll to the top of the page
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}


document.addEventListener('DOMContentLoaded', function () {
  // Get references to the elements with the classes "t-nav" and "drop-item"
  const tNav = document.querySelector('.t-nav');
  const dropItems = document.querySelectorAll('.drop-item');

  // Add a hover event listener to each "drop-item" element
  dropItems.forEach((item) => {
    item.addEventListener('mouseover', function () {
      // Add the "gradient-background" class to the "t-nav" element
      tNav.classList.add('gradient-background');
    });

    item.addEventListener('mouseout', function () {
      // Remove the "gradient-background" class when the mouse is no longer over the "drop-item" element
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
  // Initialize the Carousel
  $('#carouselExampleIndicators').carousel();

  // Add event listener for the "slide.bs.carousel" event
  $('#carouselExampleIndicators').on('slide.bs.carousel', function (event) {
    var activeSlide = $(event.relatedTarget);
    var titleElement = activeSlide.find('.carousel-slide-in-top');
    var textElement = activeSlide.find('.carousel-slide-in-bottom');

    // Add the animation classes
    titleElement.addClass('carousel-slide-in-top');
    textElement.addClass('carousel-slide-in-bottom');

    // Remove the classes from other elements
    titleElement.siblings('.carousel-slide-in-top').removeClass('carousel-slide-in-top');
    textElement.siblings('.carousel-slide-in-bottom').removeClass('carousel-slide-in-bottom');
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const connectTitle = document.querySelector(".connect-heading");
  const connectText = document.querySelector(".connect-text");
  const connectBtn = document.querySelector(".connect-btn");
  const footerLogo = document.querySelector(".footer-logo");
  const footerF = document.querySelector(".footer-f");
  const footerS = document.querySelector(".footer-s");
  const footerT = document.querySelector(".footer-t");
  const footerFo = document.querySelector(".footer-fo");
  const footer = document.querySelector(".footer-sect"); // Define the footer

  window.addEventListener("scroll", function() {
    const scrollPosition = window.innerHeight + window.scrollY;
    const footerPosition = footer.offsetTop; // Use the footer's offsetTop

    if (scrollPosition > footerPosition) {
      connectTitle.classList.add("slide-in-footer-side");
      connectText.classList.add("slide-in-footer-side");
      connectBtn.classList.add("slide-in-footer-side");
      footerLogo.classList.add("slide-in-footer");
      footerS.classList.add("slide-in-footer");
      footerT.classList.add("slide-in-footer");
      footerF.classList.add("slide-in-footer");
      footerFo.classList.add("slide-in-footer");
    }
  });
});


// Use JavaScript to control the splash screen and main content
document.addEventListener("DOMContentLoaded", function () {
  // Simulate a 1-second delay (adjust the duration as needed)
  setTimeout(function () {
      // Hide the splash screen and show the main content
      document.getElementById("splash-logo").style.opacity = 0;
      setTimeout(function () {
          document.getElementById("splash-logo").style.display = "none";
          document.getElementById("main-content").style.display = "block";
      }, 1000); // Adjust the delay based on your animation duration
  }, 1000); // Adjust the delay based on your splash screen duration
});












