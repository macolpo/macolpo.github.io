<?php
// index.php

// Get the requested URL path (e.g., /project)
$request = trim($_SERVER['REQUEST_URI'], '/');

// Match the requested route and include the appropriate PHP file
switch ($request) {
    case 'project':
        include 'project.php';  // Load project.php
        break;

    case 'about':
        include 'about.php';  // Load about.php if requested
        break;

}
?>


<nav class="navbar navbar-expand-lg sticky-top p-3" id="navbar">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Portfolio</a>
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
            <a class="nav-link" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/project">Project</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
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