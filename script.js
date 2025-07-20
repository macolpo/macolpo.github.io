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

    const medicalCarouselItems = document.getElementById("medical-carousel-items");
    const medicalCarouselIndicators = document.getElementById("medical-carousel-indicators");

    const medicalImages = [
        'dcategory.png',
        'dorders.png',
        'dordersarrived.png',
        'dordersupdate.png',
        'dordersupdate1.png',
        'dproduct.png',
        'homeabout.png',
        'homecontact.png',
        'homelogin.png',
        'homepage.png',
        'homepage1.png',
        'homeproduct.png',
        'homeproductdetails.png',
        'homeregister.png',
        'paymongoapi.png',
        'paymongolink.png',
        'userabouttoaddcart.png',
        'useraddcart.png',
        'usercart.png',
        'usercartview.png',
        'userpayment.png',
        'userpaymentconfirm.png',
        'userpaymentprocess.png',
        'userpaymentsuccess.png',
        'userprofile.png',
        'userprofilestatusorder.png'
    ];

    medicalImages.forEach((image, i) => {
        const item = document.createElement("div");
        item.className = "carousel-item" + (i === 0 ? " active" : "");

        const img = document.createElement("img");
        img.src = `img/medical/${image}`;
        img.className = "d-block col-lg-9 col-md-9 mx-auto";
        img.alt = `Slide ${i + 1}`;

        item.appendChild(img);
        medicalCarouselItems.appendChild(item);

        const indicator = document.createElement("button");
        indicator.type = "button";
        indicator.setAttribute("data-bs-target", "#carouselMedicalIndicators");
        indicator.setAttribute("data-bs-slide-to", i);
        indicator.setAttribute("aria-label", `Slide ${i + 1}`);
        if (i === 0) {
            indicator.classList.add("active");
            indicator.setAttribute("aria-current", "true");
        }

        medicalCarouselIndicators.appendChild(indicator);
    });


});
