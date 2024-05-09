import React from 'react';
import Hyperlinks from './sections/hyperlinks';
import CountdownTimer from './sections/countdown-timer';
import BGM from './sections/bgm';
import Header from './sections/header';

function App() {
  return (
    <div className="flex flex-col items-center relative min-h-screen overflow-auto" style={{
      backgroundImage: `url('/bg-brown.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <div style={{ height: '7.5rem' }}></div>

      <p className='text-center greatvibes text-5xl mt-10 text-[#362917] font-extrabold '>
        Harreld & Abegail
      </p>
      <div style={{ height: '1rem' }}></div>
      <p className='text-center tracking-wider mt-2 mb-1 greatvibes text-3xl text-[#362917]'>
        we invite you to join our wedding
      </p>

      <div style={{ height: '3rem' }}></div>
      <div className='px-10'>
        <CountdownTimer />
      </div>
      <div className='mt-10 px-3'>
        <Hyperlinks links={[
          { title: 'RSVP', url: 'https://forms.gle/ANzMX3LEJFfmikWR7' },
          { title: 'E-INVITE', url: 'https://www.canva.com/design/DAGEu_t6avY/usqEr6gRGJ-PH778qWUXgw/view?utm_content=DAGEu_t6avY&utm_campaign=designshare&utm_medium=link&utm_source=editor' },
          { title: 'COME FOR THE LOVE', url: 'https://maps.app.goo.gl/NwWnYf3qVfduZc24A' },
          { title: 'RECEPTION VENUE', url: 'https://maps.app.goo.gl/wGoPDdoE3N8QkrPZ7' },
          { title: 'WEDDING FAQs', url: 'https://www.canva.com/design/DAF9w8OvORA/oXbv2cPLEStLw9rBjNxXog/view?utm_content=DAF9w8OvORA&utm_campaign=designshare&utm_medium=link&utm_source=editor' },
          { title: 'ATTIRE GUIDE', url: 'https://www.canva.com/design/DAGEuzzC-yY/23WhEPKcEZX2rGVdBWgmHw/view?utm_content=DAGEuzzC-yY&utm_campaign=designshare&utm_medium=link&utm_source=editor' },
        ]} />
      </div>
      <div className='mt-10 mb-12 fixed bottom-0 left-1/2 transform -translate-x-1/2 z-50 w-[80%]'>
        <BGM src="/bgm.mp3" />
      </div>
    
    </div>
  );
}

export default App;
