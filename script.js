$(document).ready(function() {
    AOS.init();

    const navbar = $('#navbar');
    const backtotop = $('#backtotop');

    $(window).scroll(function () {
      if ($(this).scrollTop() > 0) {
          navbar.removeClass('bg-transparent').addClass('bg-white shadow-lg');
          backtotop.fadeIn();
      } else {
          navbar.removeClass('bg-white shadow-lg').addClass('bg-transparent');
          backtotop.fadeOut();
      }
  });


    var menuIcon = $('#menu-icon');
    var offcanvas = $('#offcanvasLeft');

    offcanvas.on('shown.bs.offcanvas hidden.bs.offcanvas', function() {
        if (offcanvas.hasClass('show')) {
            menuIcon.removeClass('bi-list').addClass('bi-list-nested');
        } else {
            menuIcon.removeClass('bi-list-nested').addClass('bi-list');
        }
    });

    // Carousel
    const carouselItems = document.getElementById("carousel-items");
    const carouselIndicators = document.getElementById("carousel-indicators");

    for (let i = 0; i < 19; i++) {
        const carouselItem = document.createElement("div");
        carouselItem.classList.add("carousel-item");

        if (i === 0) {
            carouselItem.classList.add("active");
        }

        const img = document.createElement("img");
        img.src = `img/capstone/${i}.png`;
        img.classList.add("d-block", "col-lg-9", "col-md-9", "mx-auto");
        img.alt = `Slide ${i + 1}`;

        carouselItem.appendChild(img);
        carouselItems.appendChild(carouselItem);

        const button = document.createElement("button");
        button.type = "button";
        button.setAttribute("data-bs-target", "#carouselExampleIndicators");
        button.setAttribute("data-bs-slide-to", i);
        button.setAttribute("aria-label", `Slide ${i + 1}`);

        if (i === 0) {
            button.classList.add("active");
            button.setAttribute("aria-current", "true");
        }

        carouselIndicators.appendChild(button);
    }
});
