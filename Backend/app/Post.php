<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable=[
        'user_id',
        'name',
        'description',
        'image'

    ];
    public function user()
    {
       return $this->belongsTo('\App\User');
    }
    public function likes()
    {
       return $this->morphMany('\App\Likeable','likeable');
    }
    public function comments()
    {
        return $this->hasMany('\App\Comment');
    }
}
