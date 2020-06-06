<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable=[
        'name',
        'description',
        'user_id',
        'image'

    ];
    public function user()
    {
       return $this->belongsTo('\App\User');
    }
    public function likes()
    {
       return $this->morphMany('\App\Like','likeable');
    }
    public function comments()
    {
        return $this->hasMany('\App\Commnet');
    }
}
