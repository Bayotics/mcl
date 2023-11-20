import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";
import farmOne from "../assets/images/latest-proj-one.jpg";
import oronone from "../assets/images/portfolios/oronone.jpg"
import orontwo from "../assets/images/portfolios/orontwo.jpg"
import oronthree from "../assets/images/portfolios/oronthree.jpg"
import oronfour from "../assets/images/portfolios/oronfour.jpg"
import oronfive from "../assets/images/portfolios/oronfive.jpg"
import emadebone from "../assets/images/portfolios/emadebone.jpg";
import emadebtwo from "../assets/images/portfolios/emadebtwo.jpg";
import emadebthree from "../assets/images/portfolios/emadebthree.jpg";
import emadebfour from "../assets/images/portfolios/emadebfour.jpg";
import emadebfive from "../assets/images/portfolios/emadebfive.jpg";


import testimonial1 from "../assets/images/testimonial-1.jpg"
import testimonial2 from "../assets/images/testimonial-2.jpg" 
import testimonial3 from "../assets/images/testimonial-3.jpg" 
import testimonial4 from "../assets/images/testimonial-4.jpg" 
import testimonial5 from "../assets/images/testimonial-5.jpg" 



const Portfolio = () => {
    const [open, setOpen] = useState(false);

    return(
        <div className="portfolio-main">
            <div className="main-portfolio-hero">
                <div className="portfolio-heading-main text-center mt-48">
                    <h1 className="font-bold text-5xl text-center text-white">Our Recent Projects</h1>
                </div>
            </div> 
            <div className="services-page-content">
                <h1 className="font-bold text-4xl text-center">We provide the best solutions</h1>
                <div className="w-1/12 services-span"></div>
                <p className="mt-4 text-center font-semibold text-lg text-gray-500">Explore the depth and breadth of Moi Chemineer's diverse portfolio, a testament to our commitment to engineering excellence</p>
            </div>
            <div className="portfolio-imgs px-12 pb-8 border-b ">
                <h1 className="mt-4 text text-center font-bold text-lg">Piping work at Danium Tank Farm 2 Oron, Akwa Ibom state</h1>
                    <div className="latest-project-cards flex gap-6 mt-10">
                        <div className="latest-proj-left w-1/3   bg-white pb-8">
                            <div className="latest-proj-img  ">
                            </div>
                            <h1 className="mt-4 text-center font-bold text-lg">
                                Piping
                            </h1>
                            <p className="text-center text-gray-400">Tank farm 2, Oron</p>
                        </div>
                        <div className="latest-proj-left w-1/3   bg-white pb-8">
                            <div className="latest-proj-img-two-page  ">
                            </div>
                            <h1 className="mt-4 text-center font-bold text-lg">
                                Piping
                            </h1>
                            <p className="text-center text-gray-400">Tank farm 2, Oron</p>
                        </div>
                        <div className="latest-proj-left w-1/3   bg-white pb-8">
                            <div className="latest-proj-img-three  ">   
                            </div>
                            <h1 className="mt-4 text-center font-bold text-lg">
                                Piping
                            </h1>
                            <p className="text-center text-gray-400">Tank farm 2, Oron</p>
                        </div>
                        
                    </div>
                    {/* <div className="lightbox text-center mt-8">
                        <button type="button" className="latest-proj-btn-main" onClick={() => setOpen(true)}>
                            View full portfolio
                        </button>
                        <Lightbox
                            open={open}
                            close={() => setOpen(false)}
                            slides={[
                            { src: testimonial1 },
                            { src: testimonial2 },
                            { src: testimonial3 },
                            { src: testimonial4 },
                            { src: testimonial5 },
                            ]}
                        />
                    </div> */}
            </div>

            <div className="portfolio-imgs px-12 pb-8 mt-8">
                <h1 className="mt-4 text text-center font-bold text-lg">Rehabilitation of EMADEB Depot</h1>
                    <div className="latest-project-cards flex gap-6 mt-10">
                        <div className="latest-proj-left w-1/3   bg-white pb-8">
                            <div className="latest-proj-img-imadeb-one  ">
                            </div>
                            <h1 className="mt-4 text-center font-bold text-lg">
                                Rehabilitation
                            </h1>
                            <p className="text-center text-gray-400">EMADEB Depot</p>
                        </div>
                        <div className="latest-proj-left w-1/3   bg-white pb-8">
                            <div className="latest-proj-img-imadeb-two  ">
                            </div>
                            <h1 className="mt-4 text-center font-bold text-lg">
                                Rehabilitation
                            </h1>
                            <p className="text-center text-gray-400">EMADEB Depot</p>
                        </div>
                        <div className="latest-proj-left w-1/3   bg-white pb-8">
                            <div className="latest-proj-img-imadeb-three  ">   
                            </div>
                            <h1 className="mt-4 text-center font-bold text-lg">
                                Rehabilitation
                            </h1>
                            <p className="text-center text-gray-400">EMADEB Depot</p>
                        </div>
                        
                    </div>
                    <div className="lightbox text-center mt-8">
                        <button type="button" className="latest-proj-btn-main" onClick={() => setOpen(true)}>
                            View full portfolio
                        </button>
                        <Lightbox
                            open={open}
                            close={() => setOpen(false)}
                            slides={[
                            { src: oronone },
                            { src: orontwo },
                            { src: oronthree },
                            { src: oronfour },
                            { src: oronfive },
                            { src: emadebone },
                            { src: emadebtwo },
                            { src: emadebthree },
                            { src: emadebfour },
                            { src: emadebfive },
                            { src: testimonial1 },
                            { src: testimonial2 },
                            { src: testimonial3 },
                            { src: testimonial4 },
                            { src: testimonial5 },
                            
                            ]}
                        />
                    </div>
            </div>
        </div>
    )
}

export default Portfolio;