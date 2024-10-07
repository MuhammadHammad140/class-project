import React from 'react';
import poem1 from '../assets/pimg1.jpg';
import poem2 from '../assets/pimg2.jpg';
import poem3 from '../assets/pimg3.jpg';
import poem4 from '../assets/pimg4.jpg';
import poem6 from '../assets/pimg6.jpg';
import poem7 from '../assets/pimg7.jpg';

const Poems = () => {
  const products = [
    {
      name: 'Sunny Day',
      des: 'A cheerful poem about a bright and sunny day.',
      price: 600,
      address: 'abc',
      image: poem1,
    },
    {
      name: 'Moonlit Night',
      des: 'A gentle poem about a calm and peaceful moonlit night.',
      price: 750,
      address: 'abc',
      image: poem2,
    },
    {
      name: 'Butterfly Wishes',
      des: 'A whimsical poem about a child\'s wish being carried by a butterfly.',
      price: 500,
      address: 'abc',
      image: poem3,
    },
    {
      name: 'Shirt',
      des: 'Lorem ipsum dolor',
      price: 500,
      address: 'abc',
      image: poem4,
    },
    {
      name: 'Twinkle Star',
      des: 'A short, rhyming poem about a star twinkling in the night.',
      price: 5.99,
      address: 'abc',
      image: poem6,
    },
    {
      name: 'Rainbow Dreams',
      des: 'A colorful poem that describes a child dreaming of rainbows.',
      price: 499,
      address: '',
      image: poem7,
    },
  ];

  return (
    <div className="grid lg:grid-cols-3 px-4 gap-4 pt-5 bg-[url('https://plus.unsplash.com/premium_photo-1676747629901-3f41c941d8fc?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2ltcGxlJTIwaW1hZ2UlMjBtdXNpY3xlbnwwfHwwfHx8MA%3D%3D')]">
      {
        products.map((e) => (
          <div key={e.name} className="bg-gray-200 p-4 rounded-3xl hover:bg-gray-400 transition-all"> 
            <img src={e.image} alt={e.name} className="w-full rounded-lg" />
            <h2 className="text-[40px] text-center py-4 bg-gray-300 rounded-2xl">{e.name}</h2>
            <p className="text-lg py-2">{e.des}</p>
            <h4 className="font-bold text-xl">Price: ${e.price}</h4>
            {e.address && <span className="text-gray-600 text-sm">Location: {e.address}</span>}
          </div>
        ))
      }
    </div>
  );
}

export default Poems;
