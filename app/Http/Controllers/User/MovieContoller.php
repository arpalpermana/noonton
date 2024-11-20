<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Movie;
use Inertia\Inertia;

class MovieContoller extends Controller
{
    public function show(Movie $movie){
       
        return Inertia::render('User/Movie/Show', [
            'movie' => $movie
        ]);
    }
}
