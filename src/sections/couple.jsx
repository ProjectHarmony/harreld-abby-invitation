import React from 'react';

const Couple = () => {
    return (
        <div className="h-40 w-40 flex justify-center items-center overflow-hidden rounded-md outline outline-3 outline-[#464f2c] drop-shadow-lg shadow-sm">
            <img 
                src='/pic/couple.jpg'
                className='h-full w-full object-cover' 
                alt="Couple Profile" 
            />
        </div>
    );
};

export default Couple;
