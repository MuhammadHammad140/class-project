import React from 'react';
import mimage1 from '../assets/mimg1.jpg';
import mimage2 from '../assets/mimg2.jpg';
import mimage3 from '../assets/mimg3.jpg';
import mimage4 from '../assets/mimg4.jpg';
import mimage5 from '../assets/mimg5.jpg';
import mimage6 from '../assets/mimg6.jpg';
import mimage7 from '../assets/mimg7.jpg';
import mimage8 from '../assets/mimg8.jpg';
import mimage9 from '../assets/mimg9.jpg';
import mimage10 from '../assets/mimg10.jpg';
import { useParams, Link } from 'react-router-dom';

const MoviesDetails = () => {
  const { name } = useParams();

  const movies = [
    {
      name: "The Lost Kingdom",
      price: 12.99,
      image: mimage1,
      details: "An epic fantasy adventure about a hidden kingdom battling dark forces.",
    },
    {
      name: "Cosmic Voyage",
      price: 10.49,
      image: mimage2,
      details: "A sci-fi thriller that takes you on a journey across the galaxy.",
    },
    {
      name: "Silent Echo",
      price: 8.99,
      image: mimage3,
      details: "A psychological horror that delves into the eerie world of echoes.",
    },
    {
      name: "Mystic River",
      price: 11.99,
      image: mimage4,
      details: "A drama about the intertwining lives of three childhood friends.",
    },
    {
      name: "Steel Heart",
      price: 9.99,
      image: mimage5,
      details: "A gripping action movie about a rogue cop seeking justice.",
    },
    {
      name: "Lunar Dreams",
      price: 7.49,
      image: mimage6,
      details: "A romantic drama set on a moon colony, exploring love and loss.",
    },
    {
      name: "Forgotten Heroes",
      price: 13.49,
      image: mimage7,
      details: "A war drama about unsung heroes of a pivotal battle.",
    },
    {
      name: "Digital Dawn",
      price: 14.99,
      image: mimage8,
      details: "A futuristic cyberpunk story about a hacker rebellion.",
    },
    {
      name: "Crimson Night",
      price: 12.49,
      image: mimage9,
      details: "A vampire thriller set in a dystopian future.",
    },
    {
      name: "Ocean's Whisper",
      price: 10.99,
      image: mimage10,
      details: "A mystery thriller revolving around a coastal town with dark secrets.",
    },
  ];

  const movie = movies.find((i) => i.name === name);

  if (!movie) {
    return (
      <div className='max-w-4xl mx-auto text-center mt-10'>
        <h1 className='text-3xl font-bold'>Movie Not Found</h1>
        <p className='mt-4'>
          Sorry, we couldn't find the movie you're looking for.
        </p>
        <Link to="/movies" className="mt-6 inline-block text-blue-500 underline">
          Back to Movies
        </Link>
      </div>
    );
  }

  return (
    <div className='max-w-4xl mx-auto p-4'>
      <img src={movie.image} alt={movie.name} className="w-full rounded-lg object-cover" />
      <h1 className='text-4xl font-bold mt-4'>{movie.name}</h1>
      <p className='text-xl mt-2'>{movie.details}</p>
      <h4 className='text-2xl mt-4'>Price: ${movie.price}</h4>
      <Link to="/movies" className="mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all">
        Back to Movies
      </Link>
    </div>
  );
};

export default MoviesDetails;
