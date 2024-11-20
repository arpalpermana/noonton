<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Movie;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $movies = [[
            'name' => "The Batman",
            'slug' => "the-batman",
            'category' => "Thriller",
            'video_url' => "https://www.youtube.com/watch?v=mqqft2x_Aa4",
            'thumbnail' => "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFbyV0XHHjdYGKLHwCbn_HGG3ZCzqFaGSkcg&s",
            'rating' => 4.3,
            'is_featured' => true,
        ],[
            'name' => "Avengers: Endgame",
            'slug' => "avengers-endgame",
            'category' => "Sci-fi Superheroes",
            'video_url' => "https://www.youtube.com/watch?v=TcMBFSGVi1c",
            'thumbnail' => "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DB176BD1488D7E4822256EF1778C124FC17388FC1E7F0F6D89B38AFF5FB001F6/scale?width=1200&aspectRatio=1.78&format=webp",
            'rating' => 5,
            'is_featured' => false,
        ],[
            'name' => "Transformers One",
            'slug' => "transformers-one",
            'category' => "Cartoon",
            'video_url' => "https://www.youtube.com/watch?v=u2NuUWuwPCM",
            'thumbnail' => "https://platform.polygon.com/wp-content/uploads/sites/2/2024/09/transformers_one_orion.jpg?quality=90&strip=all&crop=18.576388888889,0,62.847222222222,100",
            'rating' => 4,
            'is_featured' => true,
        ],
    ];

    Movie::insert($movies);
    }
}
