import React from 'react';

const Footer = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 bg-black text-white text-center p-6 gap-6'>
      <div className='space-y-2'>
        <h1 className='text-xl font-semibold'>Block 2, 2nd floor, Hyderabad</h1>
        <h2 className='text-lg'>+923068592792</h2>
        <p className='text-sm'>hammadhabib140@gmail.com</p>
      </div>
      <div className='space-y-2'>
        <h2 className='text-xl font-semibold'>About</h2>
        <p className='text-sm'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorum rem tempore. Itaque eius quibusdam iste est cupiditate. Cum pariatur sequi possimus laboriosam repudiandae deleniti?
        </p>
      </div>
    </div>
  );
};

export default Footer;
