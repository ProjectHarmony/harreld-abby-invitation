import React from 'react';
import Couple from './sections/couple';
import Header from './sections/header';
import Hyperlinks from './sections/hyperlinks';
import TimeCountdown from './sections/time-countdown';

import BGM from './sections/bgm';

function App() {


  return (
    <div className="flex flex-col items-center relative min-h-screen overflow-auto" style={{ backgroundImage: 'url("/bg-2.png")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <Header />
      <div className="-mt-20 mb-3">
        <Couple />
      </div>
      <div>
        <TimeCountdown />
      </div>
      <div className='mt-10 w-full'>
        <Hyperlinks links={[
          { icon: 'logo/1.png', title: 'RSVP', url: '#' },
          { icon: 'logo/2.png', title: 'PRE-WEDDING FILM', url: '#' },
          { icon: 'logo/3.png', title: 'E-INVITE', url: '#' },
          { icon: 'logo/4.png', title: 'COME FOR THE LOVE', url: '#' },
          { icon: 'logo/5.png', title: 'WEDDING FAQs', url: '#' },
          { icon: 'logo/6.png', title: 'ATTIRE GUIDE', url: '#' },
        ]} />
      </div>
      <div className='mt-10 mb-12 fixed bottom-0 left-1/2 transform -translate-x-1/2 z-50 w-[80%]'>
        <div>
          <BGM src="/bgm.mp3" />
        </div>
      </div>
      <div style={{ height: '225px' }}></div>
    </div>
  );
}

export default App;
