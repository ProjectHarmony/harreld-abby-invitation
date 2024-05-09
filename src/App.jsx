import React from 'react';
import Hyperlinks from './sections/hyperlinks';
import CountdownTimer from './sections/countdown-timer';
import BGM from './sections/bgm';
import InvitePdf from './invite.pdf';
import WeddingFaqs from './weddingfaqs.pdf';



function App() {
  
  return (
    <div className="flex flex-col items-center relative min-h-screen overflow-auto" style={{
      backgroundImage: `url('/bg-brown.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <div style={{ height: '7rem' }}></div>

      <p className='text-center greatvibes text-5xl mt-10 text-[#362917] font-extrabold '>
        Harreld & Abegail
      </p>
      <div style={{ height: '1rem' }}></div>
      <p className='text-center tracking-wider mt-2 mb-1 font-extrabold greatvibes text-3xl text-[#362917]'>
        we invite you to join our wedding
      </p>

      <div style={{ height: '3rem' }}></div>
      <div className='px-10'>
        <CountdownTimer />
      </div>
      <div className='mt-10 px-3'>
        <Hyperlinks links={[
          { title: 'RSVP', url: 'https://forms.gle/ANzMX3LEJFfmikWR7' },
          { title: 'E-INVITE', url: InvitePdf, target: '_blank' },
          { title: 'COME FOR THE LOVE', url: 'https://maps.app.goo.gl/NwWnYf3qVfduZc24A' },
          { title: 'RECEPTION VENUE', url: 'https://maps.app.goo.gl/wGoPDdoE3N8QkrPZ7' },
          { title: 'WEDDING FAQs', url: WeddingFaqs, target: '_blank'  },
        ]} />
      </div>
      <div className='mt-10 mb-12 fixed bottom-0 left-1/2 transform -translate-x-1/2 z-50 w-[80%]'>
        <BGM src="/bgm.mp3" />
      </div>
    
    </div>
  );
}

export default App;
