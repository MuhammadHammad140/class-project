import React from 'react';
import soloimage1 from '../assets/soloimg1.jpg';
import soloimage2 from '../assets/soloimg2.jpg';
import soloimage3 from '../assets/soloimg3.jpg';
import soloimage4 from '../assets/soloimg4.jpg';
import soloimage5 from '../assets/soloimg5.jpg';
import soloimage6 from '../assets/soloimg6.jpg';
import soloimage7 from '../assets/soloimg7.jpg';
import soloimage8 from '../assets/soloimg8.jpg';
import soloimage9 from '../assets/soloimg9.jpg';
import soloimage10 from '../assets/soloimg10.jpg';

const SoloPerformance = () => {
    const solo = [
        {
            id: 1, // Unique identifier
            name: "Michael Brown",
            price: 12.99,
            image: soloimage1,
            details: "Acoustic Guitar Session",
            time: "7:00 pm"
        },
        {
            id: 2,
            name: "Sarah Johnson",
            price: 10.49,
            image: soloimage2,
            details: "Jazz Vocal Performance",
        },
        {
            id: 3,
            name: "David Lee",
            price: 8.99,
            image: soloimage3,
            details: "Magic Show",
        },
        {
            id: 4,
            name: "Lisa Green",
            price: 11.99,
            image: soloimage4,
            details: "Solo Dance Performance",
        },
        {
            id: 5,
            name: "Robert Davis",
            price: 9.99,
            image: soloimage6,
            details: "Spoken Word Poetry",
        },
        {
            id: 6,
            name: "Karen Wilson",
            price: 7.49,
            image: soloimage7,
            details: "Opera Solo",
        },
        {
            id: 7,
            name: "Thomas Miller",
            price: 13.49,
            image: soloimage8,
            details: "Stand-Up Comedy Show",
        },
        {
            id: 8,
            name: "Olivia Taylor",
            price: 14.99,
            image: soloimage9,
            details: "Classical Cello Concert",
        },
        {
            id: 9,
            name: "Daniel Martinez",
            price: 12.49,
            image: soloimage10,
            details: "Solo Drumming Session",
        },
        {
            id: 10,
            name: "Daniel Martinez",
            price: 10.99,
            image: soloimage10,
            details: "Solo Drumming Session",
        }
    ];

    return (
        <div className='grid lg:grid-cols-3 px-4 gap-4 pt-5'>
            {solo.map(({ id, image, name, details, price }) => (
                <div key={id} className='bg-gray-200 p-4 rounded-3xl hover:bg-gray-300'>
                    <img src={image} alt={`${name} performance`} className="w-full rounded-lg" />
                    <h2 className='text-[40px] text-center py-4'>{name}</h2>
                    <p>{details}</p>
                    <h4>${price.toFixed(2)}</h4> {/* Price formatted to two decimal places */}
                </div>
            ))}
        </div>
    );
}

export default SoloPerformance;
