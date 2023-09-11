<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com"></script>
    </head>
        <body>
            <nav>
                <ul>
                    <li><a href="/">Accueil</a></li>
                    <li><a href="/contact-us">Contact</a></li>
                    <li><a href="/about">About us</a></li>
                    <li><a href="/articles">Articles</a></li>
                </ul>
            </nav>
            <h1>@yield('title')</h1>
        </body>
</html>
