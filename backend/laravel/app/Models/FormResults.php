<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FormResults extends Model
{
    use HasFactory;

    protected $fillable = [
        'first-name', 'last-name', 'title', 'email', 'message'
    ];
}
