<?php

namespace App\Models;

use App\Events\ChirpCreatedEvent;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Chirp extends Model
{
    use HasFactory;

    // Propriétés ou champs qu'on peut soumettre
    protected $fillable = [
        'message'
    ];
    
    // Propriétés ou champs qu'on ne peut pas soumettre
    protected $guarded = [
    ];

    public function user() : BelongsTo {
        return $this->belongsTo(User::class);
    }

    protected $dispatchesEvents = [
        "created" => ChirpCreatedEvent::class,
        // "updated" => ,
        // "deleted" => ,
    ];
}
