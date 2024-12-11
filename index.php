<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <!-- bootstrap -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <!-- css --> 
    <link rel="stylesheet" href="style.css">

    <title>Michael Robert Dellosa - Portfolio</title>
  </head>
  <body>
  <?php require('navbar.php') ?>
  

  <!-- me -->
  <section class="py-5">
    <div class="container">
      <div class="px-5 row">

        <div class="col-lg-7 col-sm-10 py-5 mt-5">
          <p class="fs-1 fw-semi">
              Hi, I'm  <span class="text-primary fw-semi">Michael!</span>
          </p>
          <p>
            An aspirant Web Developer, 24 years old from Dasmariñas City, Cavite Philippines.
          </p>
        </div>

        <div class="col-lg-5 col-md-10 col-sm-10">
          <img src="img/meme.jpg" class="img-fluid rounded-circle w-75" alt="">
        </div>
        
      </div>
    </div>
  </section>





  <!-- about -->
  <section class="py-5" id="about">
    <div class="container py-5">
      <div class="text-center" data-aos="fade-down">
        <h2 class="title fw-semi">About Me</h2>
      </div>

      <div class="py-5 row">

        <div class="col-lg-3 mb-3">
          <img src="img/togame.jpg" class="img-fluid w-100 rounded-3" alt="">
        </div>

        <div class="col-lg-9 mb-3" data-aos="fade-right">
            <h4 class="text-secondary fw-bold">Personal Details</h4>
            <p>
              I'm a graduate of the <a href="https://ncst.edu.ph/">National College of Science and Technology</a>  with a Bachelor's degree in Information Technology.
              I am passionate about developing innovative solutions and have experience in various programming languages and frameworks.
              I was also honored with the award for Best in Thesis for my capstone project.
              During my internship at HRWeb Inc,
              I contributed to developing, assisted in database management, and collaborated with teams to improve system performance and user experience. This experience enhanced my problem-solving skills and allowed me to apply my technical knowledge in a real-world environment. 
              I am eager to continue growing as a software developer and work on projects that make a meaningful impact.
            </p>

            <div>
          I have a strong interest in technology, particularly in web development and programming. My journey in tech began with a passion for creating user-friendly applications that enhance everyday life.
          </div>
        </div>


        <div class="py-2">
          <h4 class="text-secondary fw-bold">Tech Stack</h4>

          <div class="container row gap-3" data-aos="fade-up">
            <div class="card shadow-sm p-2" style="width: 10rem;">
              <div class="d-flex justify-content-center">
                <img src="img/php.png" class="img-fluid w-50">
              </div>
              <div class="card-body">
                <p class="text-center card-text">PHP</p>
              </div>
            </div>


            <div class="card shadow-sm p-2" style="width: 10rem;">
              <div class="d-flex justify-content-center">
                <img src="img/bootstrap.png" class="img-fluid w-50 mt-3">
              </div>
              <div class="card-body">
                <p class="text-center card-text">BOOTSTRAP</p>
              </div>
            </div>


            <div class="card shadow-sm p-2" style="width: 10rem;">
              <div class="d-flex justify-content-center">
                <img src="img/jQUERY.png" class="img-fluid w-50">
              </div>
              <div class="card-body">
                <p class="text-center card-text">JQUERY</p>
              </div>
            </div>


            <div class="card shadow-sm p-2" style="width: 10rem;">
              <div class="d-flex justify-content-center">
                <img src="img/mysql.png" class="img-fluid w-50">
              </div>
              <div class="card-body">
                <p class="text-center card-text">MYSQL</p>
              </div>
            </div>

            <div class="card shadow-sm p-2" style="width: 10rem;">
              <div class="d-flex justify-content-center">
                <img src="img/laravel.png" class="img-fluid w-50">
              </div>
              <div class="card-body">
                <p class="text-center card-text">LARAVEL</p>
              </div>
            </div>

            <div class="card shadow-sm p-2" style="width: 10rem;">
              <div class="d-flex justify-content-center">
                <img src="img/codeigniter.png" class="img-fluid w-50">
              </div>
              <div class="card-body">
                <p class="text-center card-text">CODEIGNITER</p>
              </div>
            </div>

            <div class="card shadow-sm p-2" style="width: 10rem;">
              <div class="d-flex justify-content-center">
                <img src="img/powerbi.png" class="img-fluid w-25 mt-4">
              </div>
              <div class="card-body">
                <p class="text-center card-text">POWER BI</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>

  
    <!-- project -->















    <!-- bootstrap js -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"></script>

    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>


    <script>
      $(document).ready(function() {
        AOS.init();

        var navbar = $('#navbar');

        $(window).scroll(function() {
            if ($(this).scrollTop() > 0) {
                navbar.addClass('shadow-sm bg-white');
            } else {
                navbar.removeClass('shadow-sm bg-white');
            }
        });

      
    });
    </script>
  </body>
</html>
