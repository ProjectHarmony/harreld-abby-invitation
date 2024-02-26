import React from 'react';

const Header = () => {
    return (
        <div className="relative w-full">
            <div className="object-cover w-full h[178px] bg-white">
                <div className=" flex justify-between">
                    <div className="h-40 w-32 mx-2   flex justify-center items-center overflow-hidden drop-shadow-lg shadow-sm mt-5">
                        <img
                            src='08.png'
                            className='h-full w-full object-cover'
                            alt="Couple Profile"
                        />
                    </div>
                    <div className="h-40 w-32 mx-3 flex justify-center items-center overflow-hidden drop-shadow-lg shadow-sm mt-5">
                        <img
                            src='24.png'
                            className='h-full w-full object-cover'
                            alt="Couple Profile"
                        />
                    </div>
                    <div className="h-40 w-32 mx-2 flex justify-center items-center overflow-hidden drop-shadow-lg shadow-sm mt-5">
                        <img
                            src='24.png'
                            className='h-full w-full object-cover'
                            alt="Couple Profile"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
