@extends('layouts.master')

@section('title')
Article
@endsection

<h2>Articles</h2>
@forelse($articles as $article)
    <article class="p-5 flex shadow-md rounded-md flex-col">
        <h2> {{ $article['title'] }}</h2>
        <p><small> Auteur: {{ $article->author }}</small></p>
        <p> {{ $article['body'] }}</p>
        <a class="w-24 py-1 px-3 bg-amber-700 rounded-full" href="{{ url('article', $article['id'])}}">Article {{ $article['id'] }}</a>
    </article>
@empty
    <p>Pas d'article</p>
@endforelse