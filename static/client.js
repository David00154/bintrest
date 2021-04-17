(function () {
    "use strict";
  
    var carousels = function () {
      $(".owl-carousel1").owlCarousel({
        loop: true,
        center: true,
        margin: 0,
        responsiveClass: true,
        nav: false,
        responsive: {
          0: {
            items: 1,
            nav: false
          },
          680: {
            items: 2,
            nav: false,
            loop: false
          },
          1000: {
            items: 3,
            nav: true
          }
        }
      });
    };
  
    (function ($) {
      carousels();
    })(jQuery);
  })();
  

  var toast = [].slice.call(document.querySelectorAll('.toast'));
  var toastList = toast.map(function (toastEl) {
    // console.log(toastEl)
    setInterval(() => {
      toastEl.classList.add('show')
      setTimeout(() => {
        toastEl.classList.remove('show');
      }, 9000)
    }, 17555)
    $('#pop-btn').on('click', () => {
      toastEl.classList.remove('show')
    })
    // return new bootstrap.Toast(toastEl, {animation: true, autohide: true, delay: 5000})
  })
  