import React from 'react';
import upmimg1 from '../assets/upimg1.jpg';
import upmimg2 from '../assets/upimg2.jpg';
import upmimg3 from '../assets/upimg3.jpg';
import herobgimg from '../assets/herobgimage2.jpg';
import { Link } from 'react-router-dom';

const Hero = () => {
  const products = [
    {
      name: 'Enchanted Forest',
      des: 'A fantasy film where a young girl discovers a magical forest and befriends mystical creatures.',
      price: 1500,
      date: '13-9-24',
      image: upmimg1
    },
    {
      name: 'Oceans Heart',
      des: 'A heartwarming drama about a marine biologist discovering a hidden underwater world.',
      price: 3500,
      date: '14-9-24',
      image: upmimg2
    },
    {
      name: 'Mystery Manor',
      des: 'A thrilling mystery set in a haunted mansion with dark secrets.',
      price: 2500,
      date: '16-9-24',
      image: upmimg3
    },
  ];

  return (
    <>
      <div className='relative'>
        <img src={herobgimg} alt="" className='w-full h-auto object-cover' />
        <div className="w-full absolute top-0 left-0 px-10 mt-10 text-left">
          <h2 className="mt-52 text-4xl font-bold text-red-500 px-20 sm:px-4 sm:text-3xl md:text-4xl">
            RHYTHM HOUSE <br />
          </h2>
          <h2 className="text-2xl font-bold text-red-500 px-20 sm:px-4 mt-4">
            A HOUSE OF MUSIC
          </h2>
          <h2 className="text-2xl font-bold text-red-500 px-20 sm:px-4 mt-2">
            MOVIES
          </h2>
          <h2 className="text-2xl font-bold text-red-500 px-20 sm:px-4 mt-2">
            POEMS
          </h2>
          <h2 className="text-2xl font-bold text-red-500 px-20 sm:px-4 mt-2">
            SOLO PERFORMANCE
          </h2>
        </div>
      </div>

      <h1 className='text-center bg-black text-white rounded-md w-full py-4 mt-8'>
        UPCOMING MOVIES
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 gap-6 pt-5 bg-cover bg-no-repeat" style={{ backgroundImage: `url(https://media.istockphoto.com/id/2007404100/photo/the-grand-stage-awaits.jpg?s=612x612&w=0&k=20&c=_42ANs4MwBwkB6gK6Lbuq3VsOALm0pZ5PlCUo8zYX-Y=)` }}>
        {products.map((e, index) => (
          <div key={index} className='bg-gray-200 p-6 rounded-xl hover:bg-gray-300 hover:cursor-pointer transition-all duration-300 shadow-lg'>
            <img src={e.image} alt={e.name} className="w-full h-auto rounded-lg" />
            <h2 className='text-3xl text-center py-4'>{e.name}</h2>
            <p>{e.des}</p>
            <h4 className='text-lg font-semibold mt-2'>Price: ${e.price}</h4>
            <span className='text-sm text-gray-600'>Release Date: {e.date}</span>
          </div>
        ))}
      </div>

      <Link to="/movies">
        <button className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 flex mx-auto mt-6 mb-10 rounded-xl px-6 py-3 text-white border-dashed border-2 border-red-800 transition-colors duration-300">
          See more
        </button>
      </Link>
    </>
  );
};

export default Hero;
