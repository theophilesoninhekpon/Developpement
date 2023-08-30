<?php
session_start();

require("./header.php"); ?>

<body>
    <div class="container-fluid">
        <div class="row wrapper">
            <div class="col col-2 bg-primary flex-column p-0">
                <div class="user-picture d-flex justify-content-center mt-5">
                    <span class="fas fa-user fs-1 rounded-circle bg-light border border-white user-icon d-flex justify-content-center align-items-center text-primary"></span>
                </div>
                <nav class="navbar">
                    <ul class="navbar-nav flex-column fs-5 w-100 mt-5" >
                        <li class="nav-item my-3 w-100 "><a href="" class="ps-2 nav-link d-inline-block w-100 text-white">Accueil</a></li>
                        <li class="nav-item my-3 w-100 "><a href="" class="ps-2 nav-link d-inline-block w-100 text-white">Mes fichiers</a></li>
                        <li class="nav-item my-3 w-100 "><a href="" class="ps-2 nav-link d-inline-block w-100 text-white">Mes projets</a></li>
                        <li class="nav-item my-3 w-100 "><a href="" class="ps-2 nav-link d-inline-block w-100 text-white">Statistiques</a></li>
                        <li class="nav-item my-3 w-100 "><a href="profile.php" class="ps-2 nav-link d-inline-block w-100 text-white">Profil</a></li>
                        <li class="nav-item my-3 w-100 "><a href="" class="ps-2 nav-link d-inline-block w-100 text-white">Support</a></li>
                        <li class="nav-item my-3 w-100 "><a href="logout.php" class="ps-2 nav-link d-inline-block w-100 text-white">Se déconnecter</a></li>
                    </ul>
                </nav>
            </div>
            <div class="col col-5 d-flex align-items-center justify-conten-center">
                <h1>Bienvenue sur votre Dashboard <?= $_SESSION['uname']; ?>!</h1>
                <p class="lead"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis vero ullam praesentium asperiores nulla molestias illo, quisquam voluptatibus incidunt accusantium.</p>
                <div class="mt-5">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. At aspernatur culpa officia ab officiis suscipit harum, asperiores reprehenderit corrupti voluptas perferendis veritatis minus ipsa incidunt ut quasi dolores blanditiis eum, nesciunt, pariatur dolorum voluptate dolor consequuntur provident. Natus, et aperiam voluptatem laudantium dignissimos ipsa! Voluptates iste odio explicabo commodi at.
                </div>
            </div>
        </div>
    </div>
</body>
</html>
