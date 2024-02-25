import React from 'react';
import Couple from './sections/couple';
import Header from './sections/header';
import Hyperlinks from './sections/hyperlinks';
import TimeCountdown from './sections/time-countdown';

import BGM from './sections/bgm';

function App() {


  return (
    
    <div className="flex flex-col items-center relative min-h-screen overflow-auto" style={{
      backgroundImage: 'url("/pic/banner.jpg")', backgroundSize: 'cover',
      backgroundPosition: 'center', backgroundRepeat: 'no-repeat', 
    }}>
  
  <div className="mt-4 flex justify-between">
      <Couple />
      <Couple />
      <Couple />
    </div>
      <div >
        <TimeCountdown />
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
