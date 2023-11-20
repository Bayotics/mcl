
import { Carousel } from 'flowbite-react';
import About from "../components/About";
import Services from "../components/Services";
import WhyUs from "../components/WhyUs";
import LatestProjects from "../components/LatestProjects";
import Team from "../components/Team";
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';


const HomePage = () => {
    return (
        <div className="main-banner w-full">
            <div className="hero-main">
                <div className="main-hero-wrapper">
                    <Carousel slideInterval={10000}>
                        <div className="carousel-container-one">
                            <div className="w-4/6 mt-48 pl-20 hero-left-captions">
                                <div className="hero-captions ">
                                    <h5 className="text-green-200 font-bold" id="hero-heading">INNOVATION REDEFINED</h5>
                                    <h1 className="text-white font-bold text-5xl leading-normal mt-4" id="hero-bold"> Explore Excellence in Engineering at Moi Chemineer Limited</h1>
                                    <div id = "hero-p-main">
                                        <p id="hero-p" className="mt-8 text-white text-xl">We provide a range of sectors throughout Africa with sustainable solutions and services. Because of the calibre of our services, our clients and partners respect us.</p>
                                    </div>
                                </div>
                                <div className="hero-explore ">
                                    <Link to= '/services'><button className="hero-btn mt-10">EXPLORE</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-container-two">
                            <div className="w-4/6 mt-48 pl-20 hero-left-captions">
                                <div className="hero-captions ">
                                    <h5 className="text-green-200 font-bold" id="hero-heading">UNPARALLELED EXPERTISE</h5>
                                    <h1 className="text-white font-bold text-5xl leading-normal mt-4" id="hero-bold"> Unleashing Engineering brilliance</h1>
                                    <div id = "hero-p-main">
                                        <p id="hero-p" className="mt-8 text-white text-xl">We are committed to making a world class difference in Engineering, Construction, Plant design and development.</p>
                                    </div>
                                </div>
                                <div className="hero-explore ">
                                    <Link to= '/services'><button className="hero-btn mt-10">EXPLORE</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-container-three">
                            <div className="w-4/6 mt-48 pl-20 hero-left-captions">
                                <div className="hero-captions ">
                                    <h5 className="text-green-200 font-bold" id="hero-heading">ENGINEERING EXCELLENCE</h5>
                                    <h1 className="text-white font-bold text-5xl leading-normal mt-4" id="hero-bold"> Moi Chemineer is where Ingenuity meets Innovation</h1>
                                    <div id = "hero-p-main">
                                        <p id="hero-p" className="mt-8 text-white text-xl">We provide a range of sectors throughout Africa with sustainable solutions and services. Because of the calibre of our services, our clients and partners respect us.</p>
                                    </div>
                                </div>
                                <div className="hero-explore ">
                                    <Link to= '/services'><button className="hero-btn mt-10">EXPLORE</button></Link>
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div> 
            <Fade left>
                <div className="about-landing px-8 py-4">
                    <About />
                </div> 
            </Fade>
                <div className="services-landing px-8 py-4">
                    <Services />
                </div>    
            <Fade right>
                <div className="whyUs-landing px-8 py-4">
                    <WhyUs />
                </div> 
            </Fade>
            <Bounce left>
                <div className="latest-project-landing py-12">
                    <LatestProjects />
                </div>
            </Bounce>
            <Fade left>
                <div className="team-landing py-12">
                    <Team />
                </div>
            </Fade>
            {/* <div className="ourClients-landing py-12">
                <OurClients />
            </div> */}
        </div>
    )
}

export default HomePage