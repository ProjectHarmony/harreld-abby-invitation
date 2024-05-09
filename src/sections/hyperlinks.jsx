import React from 'react';

const Hyperlinks = ({ links }) => {
    return (
        <div className='flex flex-col m-0 w-full border-t-1 border-b-1 px-5'>
            {links.map((link, index) => (
                <a key={index} href={link.url} target={link.target}
                    rel="noopener noreferrer" className="flex px-6 py-2 leading-6 
        text-center text-[#362917] arimo uppercase transition rounded hover:shadow-lg 
        hover:bg-[#818076] focus:outline-none items-center justify-center" style={{ fontSize: '1.6rem' }}>
                    {link.title}

                </a>
            ))}
        </div>
    );
};

export default Hyperlinks;
