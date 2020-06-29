<?php

// setting config database
define('DB_NAME', 'a160886');
define('DB_USER', 'a160886');
define('DB_PASSWORD', 'giantpurplerabbit');
define('DB_HOST', 'lrgs.ftsm.ukm.my');
define('DB_PORT', '3306');

$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT);
