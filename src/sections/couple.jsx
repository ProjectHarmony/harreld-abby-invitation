import React from 'react';

const Couple = () => {
    return (
        <div className="h-40 w-32 mx-1 flex justify-center items-center overflow-hidden drop-shadow-lg shadow-sm">
            <img 
                src='/pic/couple.jpg'
                className='h-full w-full object-cover' 
                alt="Couple Profile" 
            />
        </div>
    );
};

export default Couple;
