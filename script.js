$(document).ready(function() {
    AOS.init();

    // carousel
    const carouselItems = document.getElementById("carousel-items");
    const carouselIndicators = document.getElementById("carousel-indicators");

    for (let i = 0; i < 18; i++) {
       
      const carouselItem = document.createElement("div");
      carouselItem.classList.add("carousel-item"); 

      if (i === 0) {
        carouselItem.classList.add("active");
      }

      const img = document.createElement("img");
      img.src = `img/capstone/${i}.png`; 
      img.classList.add("d-block", "w-100"); 
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
      img.classList.add("d-block", "w-100");
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