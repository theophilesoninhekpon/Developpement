@extends('layouts.master');

<h1> {{ $article->title }}</h1>
<p> {{ $article->body }}</p>

@foreach($article->comments as $comment)
    <p><strong>{{ $comment->user->name }}</strong> a réagi :</p>
    <p>{{ $comment->comment }}</p>
    <p><small>{{ $comment->created_at->diffForHumans()}}</small></p>
@endforeach