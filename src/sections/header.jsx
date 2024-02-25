import React from 'react';

const Header = () => {
    return (
        <div className="relative w-full">
            <div className="bg-black bg-opacity-30 absolute inset-0"></div>
            <img
                className="object-cover w-full h-64"
                src='pic/couple.jpg'
                alt="Banner"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-20">

                <h1 className="text-6xl font-bold text-white relative z-10 font-protest-riot northwave">Harreld & Abby</h1>
                <p className="text-3xl text-white relative z-10 northwave">For Eternity</p>
            </div>
        </div>
    );
};

export default Header;
