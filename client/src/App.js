import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './css/core.css'

import NavBar from './components/nav/NavBar'
import SmallNav from './components/nav/NavBarSmall'

import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import LogIn from './components/Login'
import Services from './components/Services'
import SignUp from './components/SignUp'

import Dashboard from './components/private/Dashboard'
import PrivateRoute from './components/private/PrivateRoute'

const App = () => {
      // //<!--Start of Tawk.to Script-->
      // var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
      // (function(){
      // var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
      // s1.async=true;
      // s1.src='https://embed.tawk.to/5e75be618d24fc2265891178/default';
      // s1.charset='UTF-8';
      // s1.setAttribute('crossorigin','*');
      // s0.parentNode.insertBefore(s1,s0);
      // })();
      // //<!--End of Tawk.to Script-->

  return (
    <div className='main'>
      <nav>
        <img src="https://images.craftsnherbs.com/beedev/beedev.png" alt="business Logo"/>
        <NavBar />
        <SmallNav />
      </nav>
      <div className='content'>
        <Switch>
          <Route path='/About'>
            <About />
          </Route>
          <Route path='/Contact'>
            <Contact />
          </Route>
          <Route path='/Services'>
            <Services />
          </Route>
          {/* <Route path='/Company Log In'>
            <LogIn />
          </Route> */}
          <Route path='/Sign Up'>
            <SignUp />
          </Route>
          <Route path='/Company Log In' component={LogIn} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
      <footer>
        <span>
          <img src='https://images.craftsnherbs.com/beelogo.jpg' alt="" id='code' />
          &#169; 2020 BeeDev Services
        </span>
        <span id='social'>
          <img src='https://images.craftsnherbs.com/veteranlogo.jpg' alt='' id='veteran' />
          <a href="https://github.com/beedev-services" target="_blank" rel="noreferrer"><img src='https://images.craftsnherbs.com/beedev/github.png' alt="github" className="social" /></a>
        </span>
      </footer>
    </div>
  );
};

export default App;