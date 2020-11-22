import React from 'react'

import './css/core.css'

import NavBar from './components/nav/NavBar'
import SmallNav from './components/nav/NavBarSmall'

const App = () => {
      //<!--Start of Tawk.to Script-->
      var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
      (function(){
      var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
      s1.async=true;
      s1.src='https://embed.tawk.to/5e75be618d24fc2265891178/default';
      s1.charset='UTF-8';
      s1.setAttribute('crossorigin','*');
      s0.parentNode.insertBefore(s1,s0);
      })();
      //<!--End of Tawk.to Script-->

  return (
    <div className='main'>
      <nav>
        <img src="https://images.craftsnherbs.com/beedev/beedev.png" alt="business Logo"/>
        <NavBar />
        <SmallNav />
      </nav>
    </div>
  );
};

export default App;