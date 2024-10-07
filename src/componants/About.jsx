import React, { useState } from 'react';

const Feedback = () => {
  const [feedback, setFeedback] = useState("");
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className='max-w-lg mx-auto pt-12 px-4 sm:pt-16 lg:pt-24'>
      <h2 className="text-2xl font-bold text-center mb-4 sm:text-3xl lg:text-4xl">FEEDBACK FORM</h2>
      <form className="space-y-4">
        <div>
          <label className='font-bold block' >Name</label>
          <input 
            type="text" 
            placeholder='Enter Your Name'  
            onChange={(e) => setName(e.target.value)} 
            value={name}
            className="mt-1 w-full border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-0 placeholder:p-2 py-2 px-3 sm:text-lg"
            required
          />
        </div>
        <div>
          <label className='font-bold block' >Email</label>
          <input 
            type="email" 
            placeholder='Enter Your Email' 
            onChange={(e) => setEmail(e.target.value)} 
            value={email}
            className="mt-1 w-full border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-0 placeholder:p-2 py-2 px-3 sm:text-lg"
            required
          />
        </div>
        <div>
          <label className="font-bold block">Feedback</label>
          <textarea 
            placeholder='Enter Your Message' 
            onChange={(e) => setFeedback(e.target.value)} 
            value={feedback} 
            className="mt-1 w-full border-2 border-gray-300 rounded-md shadow-sm h-32 sm:h-40 focus:outline-none focus:ring-0 placeholder:p-2 py-2 px-3 sm:text-lg"
            required
          />
        </div>
        <div className='text-center'>
          <button 
            type="submit"
            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 transition-colors duration-200 sm:text-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Feedback;
