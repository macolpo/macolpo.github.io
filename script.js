$(document).ready(function() {
    AOS.init();
    toggleDarkMode();
    

    var navbar = $('#navbar');
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            navbar.removeClass('bg-transparent').addClass('bg-blur shadow');
        } else {
            navbar.removeClass('bg-blur shadow').addClass('bg-transparent');
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
       
    //  carousel
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
      img.classList.add("d-block", "col-lg-10","col-md-12", "mx-auto"); 
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

    //dj 

    const carouselItemsdj = document.getElementById("carousel-itemsdj");
    const carouselIndicatorsdj = document.getElementById("carousel-indicatorsdj");

    for (let i = 0; i < 21; i++) {
      const carouselItem = document.createElement("div");
      carouselItem.classList.add("carousel-item");

      if (i === 0) {
        carouselItem.classList.add("active");
      }

      const img = document.createElement("img");
      img.src = `img/dj/${i + 1}.png`; 
      img.classList.add("d-block", "col-lg-10","col-md-12", "mx-auto"); 
      img.alt = `Slide ${i + 1}`; 

      carouselItem.appendChild(img);

      carouselItemsdj.appendChild(carouselItem);

      // Create carousel indicator button
      const button = document.createElement("button");
      button.type = "button";
      button.setAttribute("data-bs-target", "#carouselExampleIndicatorsdj");
      button.setAttribute("data-bs-slide-to", i);
      button.setAttribute("aria-label", `Slide ${i + 1}`);

      if (i === 0) {
        button.classList.add("active");
        button.setAttribute("aria-current", "true");
      }

      carouselIndicatorsdj.appendChild(button);
    }


     

  
});

function toggleDarkMode() {
  const currentTheme = document.documentElement.getAttribute("data-bs-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-bs-theme", newTheme);

  // Get the image element and change its source based on the theme
  const icon = document.getElementById("darkmode-icon");
  if (newTheme === "dark") {
    icon.src = "img/lightmode.png";
  } else {
    icon.src = "img/darkmode.png"; 
  }
}