import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../redux/counterSlice';

const Contact = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className='flex flex-col items-center justify-center space-y-4 p-6'>
      <div className='text-2xl font-semibold mb-4'>Counter</div>
      <div className='flex items-center space-x-4'>
        <button
          className='bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200'
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          ADD
        </button>
        <span className='text-xl font-bold'>{count}</span>
        <button
          className='bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition-colors duration-200'
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          REMOVE
        </button>
      </div>
    </div>
  );
};

export default Contact;
