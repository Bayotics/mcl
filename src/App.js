import './App.css';
import mainLogo from "./assets/images/moi-full-logo-transformed.png";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import About from './pages/AboutUs';
import Contact from './pages/Contact';
import Service from './pages/Services';
import Portfolio from './pages/Portfolio';
import { useState } from 'react';

function App() {

  const [nav, setNav] = useState(false)
  const navToggler = () => {
    setNav(!nav)
  }
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <div className=" main-nav flex px-8">
            <div className="w-2/6  justify-center pt-4 pl-10" id='nav-logo'>
                <Link to= "/">
                  <img className="h-4/6" id='moi-logo' src = {mainLogo} alt="moi logo"/>
                </Link> 
            </div>
            <div className="w-4/6 pt-8" id='nav-menu-main'>
                <div className="flex" id='nav-menu'>
                    <div className="flex  text-white font-semibold w-10/12 justify-between nav-menu-main">
                        <Link to= "/"><div className="nav-item">HOME</div></Link>
                        
                        <Link to= "/aboutus"> <div className="nav-item nav-about">ABOUT <span className='text-sm'>▼</span> 
                          </div>
                          <div className='border about-dropdown bg-white text-black '>
                              <ul>
                                <li className='pb-2 pt-2 border-b'>Who we are</li>
                                <li  className='pb-2 pt-2 border-b'>Mission Statement</li>
                                <li  className='pb-2 pt-2 border-b'>Our team</li>
                                <li  className='pb-2 pt-2'>Testimonials</li>
                              </ul>
                          </div>
                        </Link>
                        
                        <Link to= "/portfolio"><div className="nav-item">PORTFOLIO</div></Link>
                        
                        <Link to= "/services"><div className="nav-item nav-about">SERVICES <span className='text-sm'>▼</span></div>
                          <div className='border about-dropdown bg-white text-black '>
                              <ul>
                                <li className='pb-2 pt-2 border-b'>Design</li>
                                <li  className='pb-2 pt-2 border-b'>Construction</li>
                                <li  className='pb-2 pt-2 border-b'>Maintenance</li>
                                <li  className='pb-2 pt-2'>Consultancy</li>
                              </ul>
                          </div>
                        </Link>
                        
                        <Link to= "/contact"><div className="nav-item">CONTACT US</div></Link>
                        
                    </div>
                    <div className="nav-socials  justify-between flex w-2/12 px-8 pt-0 ">
                        <div className="facebook-ico">
                          <a href='https://web.facebook.com/p/Moi-Chemineer-Limited-100063563306952/?_rdc=1&_rdr' target='blank'>
                            <i className="fa fa-facebook text-white" aria-hidden="true"></i>
                          </a> 
                        </div>
                        <div className="twitter-ico">
                            <i className="fa fa-twitter text-white" aria-hidden="true"></i>
                        </div>
                        <div className="instagram-ico">
                            <i className="fa fa-linkedin text-white" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className='bars'>
                      <i className="fa fa-bars text-white" aria-hidden="true"
                      onClick={navToggler}>
                      </i>
                    </div>
                    {nav &&(
                      <div className='mobile-nav text-white'>
                        <Link to= "/"><div className="nav-item border-b">HOME</div></Link>
                        
                        <Link to= "/aboutus"> 
                        <div className="nav-item border-b">
                          ABOUT
                          </div>
                        </Link>
                        
                        <Link to= "/portfolio"><div className="nav-item border-b">PORTFOLIO</div></Link>
                        
                        <Link to= "/services"><div className="nav-item border-b">SERVICES</div></Link>
                        
                        <Link to= "/contact"><div className="nav-item">CONTACT US</div></Link>
                      </div>
                    )}
                    
                </div>
            </div>
          </div>
        </div>
        <Routes>
          <Route path = '/' element = {<HomePage />} />
          <Route path = '/aboutus' element = {<About/>} />
          <Route path = '/contact' element = {<Contact/>} />
          <Route path = '/services' element = {<Service/>} />    
          <Route path = '/portfolio' element = {<Portfolio/>} />

        </Routes>
        <footer className='border'>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
