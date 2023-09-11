<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;

    // Chargement automatique de l'auteur 'user' de l'article
    protected $appends = [
        'author'
    ];

    public function getAuthorAttribute() {
        return $this->user->name;
    }

    // Attrbuts qu'on peut remplir
    protected $fillable = [
        'title',
        'body',
        'user_id',
        'image'
    ];

    // Relations entre cette table et les autres

    // Un article n'a qu'un auteur
    public function user() 
    {
        return $this->belongsTo(User::class);
    }

    // Un article peut avoir plusieurs commentaires
    public function comments() 
    {
        return $this->hasMany(Comment::class);
    }

}
