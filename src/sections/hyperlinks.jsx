import React from 'react'

const Hyperlinks = ({ links }) => {
    return (
        <div className='flex flex-col m-0 w-full border-t-1 border-b-1 px-5'>
            {links.map((link, index) => (
                <a key={index} href={link.url} className="flex px-6 py-2 text-xs font-medium leading-6 
        text-center text-white uppercase transition rounded hover:shadow-lg
        hover:bg-[#4f5931] focus:outline-none items-center justify-start border-b-2 border-white" >
                    <img src={link.icon} alt="icon" className="h-10 w-10 object-contain mr-10" /> {link.title}
                </a>
            ))}
        </div>
    )
}

export default Hyperlinks
