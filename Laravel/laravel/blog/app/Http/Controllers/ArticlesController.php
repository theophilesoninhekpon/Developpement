<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;

class ArticlesController extends Controller
{
    //
    public function index () {
        $articles = Article::with('user')->orderBy('created_at', 'DESC')->get();
        return view('articles.articles', ["articles" => $articles]);
    }

    // Renvoie la vue d'un article précis

    public function show($id) {
        // $article = Article::with('user')->where('id', $id)->firstOrFail();

        $article = Article::with([
            'comments' => function ($query) {
                $query->with('user');
            }
        ])->findOrFail($id);
        return view('articles.show', compact('article'));
    }
}
