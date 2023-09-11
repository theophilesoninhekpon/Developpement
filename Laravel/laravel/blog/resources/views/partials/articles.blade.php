@extends('layouts.master')

@section('title')
Article
@endsection

<h2>Articles</h2>
@forelse ($articles as $article)
    <h3>{{$article['title']}}</h3>
    <p>{{$article['body']}}</p>
@empty
    <p>Pas d'articles pour le moment</p>
@endforelse