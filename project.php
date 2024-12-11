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

    <!-- navb -->
    <nav class="navbar navbar-expand-lg sticky-top p-3" id="navbar">
      <div class="container-fluid">
        <a class="navbar-brand" href="index.html">Portfolio</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
          <i class="bi bi-list"></i>
        </button>

        <!-- Offcanvas Menu -->
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
          <div class="offcanvas-header">
            <h5 id="offcanvasRightLabel">Details</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav m-auto gap-3">
              <li class="nav-item">
                <a class="nav-link fw-semi" href="index.html#about">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link fw-semi" href="project.html">Project</a>
              </li>
              <li class="nav-item">
                <a class="nav-link fw-semi" href="#">Contact</a>
              </li>
            </ul>

            <!-- links -->
            <div class="py-3">
              <div class="d-flex gap-3">
                <a href="https://github.com/macolpo" target="_blank"><img class="img-fluid" width="25px" src="img/github.png" alt=""></a>
                <a href="https://github.com/macolpo" target="_blank"><img class="img-fluid" width="25px" src="img/linkin.png" alt=""></a>
              </div>
            </div>
          </div>
        </div>


      </div>
    </nav>

    <!-- project -->

    <section>
      <div class="py-3 bg-primary-subtle">
        <div class="text-center py-5" data-aos="fade-up">
          <h2 class="title fw-semi">PROJECT</h2>
        </div>
      </div>
      <!-- content -->
      <div>
        hi
      </div>


    </section>

    
     
   











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
