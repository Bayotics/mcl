import design from "../assets/images/services-design.jpeg";
import construction from "../assets/images/services-construction.jpg";
import process from "../assets/images/services-process.jpeg"
import maintenance from "../assets/images/services-maintenance.jpg";
import management from "../assets/images/services-management.jpg";
import consultant from "../assets/images/services-consultant.jpg";
import Fade from 'react-reveal/Fade';


const Services = () => {
    return (
        <div className=" pt-4">
            <div className="px-16 mt-8 services-landing-main">
                <div className="services-caption-top text-center  ">
                    <h1 className="text-3xl font-bold">What we do</h1>
                    <div className="w-1/12 services-span"></div>
                    <p className="mt-4 text-gray-500 text-lg font-medium"></p>
                </div>
                <Fade left>
                    <div className="services-landing-innner mt-16 gap-8 flex">
                        <div className="w-1/3  rounded-lg pb-4 shadow-md">
                            <div className="services-img-upper">
                                <img src= {design} alt="design" className="services-img h-56 w-full rounded-t-lg " />
                            </div>
                            <div className="services-captions px-4">
                                <h1 className="text-center mt-8 font-bold text-lg">ENGINEERING DESIGN</h1>
                                <div className="w-2/12 services-span"></div>
                                <p className="mt-4 text-center">Our experienced team of engineers employs state-of-the-art tools and methodologies to conceptualize and develop designs that not only meet but exceed client expectations. </p>
                            </div>
                        </div>
                        <div className="w-1/3 rounded-lg pb-4 shadow-md">
                            <div className="services-img-upper">
                                <img src= {construction} alt="design" className="h-56 w-full services-img rounded-t-lg" />
                            </div>
                            <div className="services-captions px-4">
                                <h1 className="text-center mt-8 font-bold text-lg">ENGINEERING CONSTRUCTION</h1>
                                <div className="w-2/12 services-span"></div>
                                <p className="mt-4 text-center">From groundbreaking to project completion, we seamlessly integrate design concepts into the construction process, emphasizing efficiency, safety, and sustainability. </p>
                            </div>
                        </div>
                        <div className="w-1/3 rounded-lg pb-4 shadow-md">
                            <div className="services-img-upper">
                                <img src= {process} alt="design" className="h-56 w-full services-img rounded-t-lg" />
                            </div>
                            <div className="services-captions px-4">
                                <h1 className="text-center mt-8 font-bold text-lg">PROCESS ENGINEERING</h1>
                                <div className="w-2/12 services-span"></div>
                                <p className="mt-4 text-center">Our experienced team of engineers employs state-of-the-art tools and methodologies to conceptualize and develop designs that not only meet but exceed client expectations. </p>
                            </div>
                        </div>
                    </div>
                </Fade>
                <Fade right>
                    <div className="services-landing-innner mt-12 gap-8 flex">
                        <div className="w-1/3 rounded-lg pb-4 shadow-md">
                            <div className="services-img-upper">
                                <img src= {maintenance} alt="design" className="h-56 w-full services-img rounded-t-lg" />
                            </div>
                            <div className="services-captions px-4">
                                <h1 className="text-center mt-8 font-bold text-lg">MAINTENANCE</h1>
                                <div className="w-2/12 services-span"></div>
                                <p className="mt-4 text-center">We employ a strategic, data-driven approach to maintenance, leveraging advanced diagnostics and predictive analytics to identify potential issues before they escalate. </p>
                            </div>
                        </div>
                        <div className="w-1/3 rounded-lg pb-4 shadow-md">
                            <div className="services-img-upper">
                                <img src= {management} alt="design" className="h-56 w-full services-img rounded-t-lg" />
                            </div>
                            <div className="services-captions px-4">
                                <h1 className="text-center mt-8 font-bold text-lg">PROJECT MANAGEMENT</h1>
                                <div className="w-2/12 services-span"></div>
                                <p className="mt-4 text-center"> From project initiation to completion, we adopt a holistic approach, integrating strategic planning, risk management, and quality control into the fabric of our project management service. </p>
                            </div>
                        </div>
                        <div className="w-1/3 rounded-lg pb-4 shadow-md">
                            <div className="services-img-upper">
                                <img src= {consultant} alt="design" className="h-56 w-full services-img rounded-t-lg" />
                            </div>
                            <div className="services-captions px-4">
                                <h1 className="text-center mt-8 font-bold text-lg">CONSULTANCY</h1>
                                <div className="w-2/12 services-span"></div>
                                <p className="mt-4 text-center">From concept to execution, our consultancy services at Moi Chemineer Limited are dedicated to adding value to your projects, ensuring they surpass your expectations</p>
                            </div>
                        </div>
                    </div>
                </Fade>
                
            </div>
        </div>
    )
}
export default Services