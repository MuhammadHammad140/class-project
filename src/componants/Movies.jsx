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
import { Link } from 'react-router-dom';

const Movies = () => {
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

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 pt-5 bg-[url('https://plus.unsplash.com/premium_photo-1676747629901-3f41c941d8fc?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2ltcGxlJTIwaW1hZ2UlMjBtdXNpY3xlbnwwfHwwfHx8MA%3D%3D')] bg-cover">
      {movies.map((e) => {
        return (
          <div key={e.name} className="bg-gray-200 p-4 rounded-3xl hover:bg-gray-400 transition duration-300 ease-in-out transform hover:scale-105">
            <img src={e.image} alt={e.name} className="w-full h-64 object-cover rounded-md" />
            <svg className="h-4 w-4 text-purple-500 my-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <h2 className="text-[24px] text-center py-4 bg-gray-300 rounded-2xl">{e.name}</h2>
            <p className="text-sm mb-2">{e.details}</p>
            <h4 className="font-bold mb-2">${e.price}</h4>
            <Link to={`/movies/${e.name}`} className="text-blue-500 underline">View Details</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Movies;
