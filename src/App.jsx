import React from 'react';
import Hyperlinks from './sections/hyperlinks';
import TimeCountdown from './sections/countdown-timer';

import BGM from './sections/bgm';
import CountdownTimer from './sections/countdown-timer';
import Header from './sections/header';

function App() {


  return (

    <div className="flex flex-col items-center relative min-h-screen overflow-auto" style={{
      backgroundColor: '#e89494', backgroundSize: 'cover',
      backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
    }}>

      <Header />

    
      <p className='text-center northwave text-5xl mt-10 text-white'>
        Harreld & Abegail
      </p>
      <p className='text-center tracking-wider mt-2 mb-1 northwave text-3xl text-white'>
        Are getting married
      </p>
      <div className=''>

        <CountdownTimer />
      </div>
      <div className='mt-10 w-full'>
        <Hyperlinks links={[
          { icon: 'logo/1.png', title: 'RSVP', url: 'https://forms.gle/ANzMX3LEJFfmikWR7' },
          { icon: 'logo/3.png', title: 'E-INVITE', url: 'https://www.canva.com/design/DAF8-pUHk_M/DMG30qGPFaPdTAphj1tQYQ/watch?utm_content=DAF8-pUHk_M&utm_campaign=designshare&utm_medium=link&utm_source=editor' },
          { icon: 'logo/4.png', title: 'COME FOR THE LOVE', url: 'https://maps.app.goo.gl/e44z82twTh1R3CG2A' },
          { icon: 'logo/5.png', title: 'WEDDING FAQs', url: 'https://www.canva.com/design/DAF9w8OvORA/oXbv2cPLEStLw9rBjNxXog/view?utm_content=DAF9w8OvORA&utm_campaign=designshare&utm_medium=link&utm_source=editor' },
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