<?php

session_start();

require('header.php');

?>

<body>
        <div class="container-fluid">
        <div class="container">
            <div class="row">
                <a href="#" class="navbar-brand">APP</a>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a href="index.php" class="nav-link">Accueil</a>
                    </li>

                    <?php if(!isset($_SESSION['uname'])): ?>
                    <li class="nav-item">
                        <a href="" class="nav-link">Pricing</a>
                    </li>
                    <li class="nav-item">
                        <a href="" class="nav-link">Support</a>
                    </li>
                    <li class="nav-item">
                        <a href="authentification.php" class="nav-link">Se connecter</a>
                    </li>
                    <?php else: ?>
                    <li class="nav-item">
                        <a href="dashboard.php" class="nav-link">Dashboard</a>
                    </li>
                    <li class="nav-item">
                        <a href="logout.php" class="nav-link">Se déconnecter</a>
                    </li>
                    <?php endif; ?>
                </ul>
            </div>
            <div class="row">
                <div class="circle">Coolas !</div>
            </div>
        </div>
    </div>
    
</body>