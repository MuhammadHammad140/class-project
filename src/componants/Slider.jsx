import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import soloperfomance from '../assets/soloper.jpg';
import slide1 from '../assets/slideimg1.jpg';
import slide2 from '../assets/slideimg2.jpg';
import slide3 from '../assets/slideimg3.jpg';
import { Link } from 'react-router-dom';

const Slider = () => {
  return (
    <div>
      <div className="text-2xl py-6 text-center rounded-2xl text-red-950 bg-[url('https://media.istockphoto.com/id/1955560678/photo/innovation.jpg?s=612x612&w=0&k=20&c=vixXrCZKoxDn-0KXH2NBWwnak6Vi4fX2y721V06sGxw=')]">
        <TypeAnimation
          sequence={[
            'UP COMING SOLO PERFORMANCES Jane Doe',
            1000, 
            'UP COMING SOLO PERFORMANCES John Smith',
            1000,
            'UP COMING SOLO PERFORMANCES Emily Clark',
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '2em', display: 'inline-block' }}
          repeat={Infinity}
        />
      </div>

      <h1 className='text-center bg-black text-white rounded-md w-auto py-4'>SOLO PERFORMANCE</h1>

      <div>
        <img src={soloperfomance} alt="Solo Performance" className='w-full h-80 object-cover rounded-lg' />
      </div>

      {/* Slider */}
      <div className="grid lg:grid-cols-3 px-4 gap-4 pt-5 bg-[url('https://plus.unsplash.com/premium_photo-1676747629901-3f41c941d8fc?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2ltcGxlJTIwaW1hZ2UlMjBtdXNpY3xlbnwwfHwwfHx8MA%3D%3D')]">
        {[
          {
            name: 'Jane Doe',
            event: 'Solo Piano Recital',
            date: 'October 5, 2024',
            price: 500,
            image: slide1,
          },
          {
            name: 'John Smith',
            event: 'Stand-Up Comedy Show',
            date: 'November 10, 2024',
            price: 1500,
            image: slide2,
          },
          {
            name: 'Emily Clark',
            event: 'Classical Violin Concert',
            date: 'December 1, 2024',
            price: 2000,
            image: slide3,
          },
        ].map(({ name, event, date, price, image }) => (
          <div key={name} className='bg-gray-200 p-4 rounded-3xl hover:bg-gray-300'>
            <img src={image} alt={`${name} performance`} className="w-full rounded-lg" />
            <h1 className='text-[40px] text-center py-4'>{name}</h1>
            <p>{event}</p>
            <p>{date}</p>
            <p>${price}</p>
          </div>
        ))}
      </div>

      <Link to="/soloperformance">
        <button className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 flex mx-auto mt-4 rounded-2xl px-6 py-2 border-dashed border-2 border-red-800">
          See more
        </button>
      </Link>
    </div>
  );
}

export default Slider;
