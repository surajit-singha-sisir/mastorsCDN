// GALLERY SCECTION START

// Active span change Event
$(document).ready(function () {
    $(".gallery-item span").on("click", function () {
      $(".gallery-item span").removeClass("active");
      $(this).addClass("active");
    });
  
    // 3 Second scroll
    function toggleActive() {
      var $active = $(".gallery-item .active");
      var $next = $active.next().length
        ? $active.next()
        : $(".gallery-item span").first();
  
      // Check if viewport width is 768px or less
      if ($(window).width() <= 768) {
        // Fade out the current active span
        $active.fadeOut("slow", function() {
          $active.removeClass("active");
          // Fade in the next span and add the active class
          $next.fadeIn("slow").addClass("active");
        });
      } 
      else {
        // No transition for larger devices, simply change the active class
        $active.removeClass("active");
        $next.addClass("active");
      }
    }
  
    // Set interval to change active span every 3 seconds
    var interval = setInterval(toggleActive, 5000);
  
    // Pause on mouse hover
    $(".gallery-item").hover(
      function () {
        clearInterval(interval);
      },
      function () {
        interval = setInterval(toggleActive, 3000);
      }
    );
  });

  // GALLERY SCECTION END



  
  // CAROUSEL SLIDER-1 START
  $(document).ready(function () {
    // Next button functionality
    $(".fa-chevron-right").click(function () {
        var carouselContainer = $(this).closest(".carousel-container");
        var carousel = carouselContainer.find(".carousel");
        var scrollDistance = carouselContainer.find(".items").eq(0).outerWidth(true);
        carousel.animate({ scrollLeft: '+=' + scrollDistance }, 0);
    });

    // Previous button functionality
    $(".fa-chevron-left").click(function () {
        var carouselContainer = $(this).closest(".carousel-container");
        var carousel = carouselContainer.find(".carousel");
        var scrollDistance = carouselContainer.find(".items").eq(0).outerWidth(true);
        carousel.animate({ scrollLeft: '-=' + scrollDistance }, 0);
    });
});
 // CAROUSEL SLIDER END



//  GALLERY START
print = console.log;
    function gallery1() {
        const imgs = document.querySelectorAll('.background > div:not(:last-child)');
        // print(imgs);

        imgs.forEach(function (div) {
            div.onclick = function () {
                swapClasses(div);
            }

        });

    }

    function swapClasses(clickedDiv) {
        var centerDiv = document.querySelector('.gal-3');

        // Swap classes
        var tempClass = centerDiv.className;
        centerDiv.className = clickedDiv.className;
        clickedDiv.className = tempClass;
        const audio = document.getElementById('audioPlayer');
        audio.play();
        clickedDiv.style.transition = 'all 0.5s cubic-bezier(0.38,-0.25, 0, 1.7)';
    }



    window.onload = function () {
        gallery1();
    }
//  GALLERY END