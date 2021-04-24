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
          nav: false,
        },
        680: {
          items: 2,
          nav: false,
          loop: false,
        },
        1000: {
          items: 3,
          nav: true,
        },
      },
    });
  };

  (function ($) {
    carousels();
  })(jQuery);
})();
// console.log(faker.address.country());

$("document").ready(() => {
  setInterval(() => {
    $("#country")[0].textContent = faker.address.country();
    $("#balance")[0].textContent =
      "$" + faker.finance.amount().split(".").join(",") + 0;
    $("#pop-up")[0].classList.toggle("hidden");
    setTimeout(() => {
      $("#pop-up")[0].classList.toggle("hidden");
    }, 9000);
  }, 17555);
});
// $('#pop-btn').on('click', () => {
//   toastEl.classList.remove('show')
// })
