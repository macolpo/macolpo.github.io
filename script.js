$(document).ready(function() {
    AOS.init();
    const storedTheme = localStorage.getItem("theme") || "light"; 
    const documentElement = $(document.documentElement);
    const navbar = $('#navbar');
    const backtotop = $('#backtotop');

    documentElement.attr("data-bs-theme", storedTheme);

    theme(storedTheme);
    $(window).scroll(function() {
      if ($(this).scrollTop() > 0) {
        navbar.addClass('shadow-lg ');
        backtotop.fadeIn();
      } else {
        navbar.removeClass('shadow-lg ');
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
      img.classList.add("d-block", "col-lg-9","col-md-9", "mx-auto"); 
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

function toggleDarkMode() {
  const $documentElement = $(document.documentElement);
  const currentTheme = $documentElement.attr("data-bs-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  $documentElement.attr("data-bs-theme", newTheme);

  localStorage.setItem("theme", newTheme);

  // Update the dark mode icon and navbar class
  theme(newTheme);
}

function theme(theme) {
  const icon = $("#darkmode-icon");
  const navbar = $('#navbar');

  // Update the icon based on the theme
  if (theme === "dark") {
    icon.attr("src", "img/lightmode.png");
    navbar.removeClass('bg-white').addClass('bg-dark-subtle');
  } else {
    icon.attr("src", "img/darkmode.png");
    navbar.removeClass('bg-dark-subtle').addClass('bg-white');
  }
}
