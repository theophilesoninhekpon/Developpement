<?php

session_start();

session_unset();

session_destroy();

header("Location: /authentification.php", false, 301);