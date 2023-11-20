import Services from "../components/Services";
import { Link } from 'react-router-dom';

const Service = () => {
    return (
        <div className="services-main">
            <div className="main-services-hero">
                <div className="services-heading-main text-center mt-48">
                    <h1 className="font-bold text-5xl text-center text-white">Our Services</h1>
                </div>
            </div> 
            <div className="services-page-content">
                <h1 className="font-bold text-4xl text-center">We provide the best solutions</h1>
                <div className="w-1/12 services-span"></div>
            </div>
            <div className="servics-page-section flex px-12 py-4 gap-6">
                <div className="w-1/2 services-section-cap">
                    <h1 className="font-semibold text-3xl">Why you should work with us</h1>
                    <p className="mt-4 text-lg">Moi Chemineer caters to a diverse range of industries, including manufacturing, energy, oil and gas, and beyond. Our multidisciplinary approach allows us to tailor our expertise to the unique needs of each sector, ensuring that our solutions are not only cutting-edge but also highly relevant and impactful.</p>
                    <p className="mt-8 text-lg">Whether you are seeking groundbreaking engineering solutions, exploring partnerships, or just curious about the future of engineering, Moi Chemineer invites you to connect with us. Let's embark on a journey of innovation together.</p>
                </div>
                <div className="w-1/2 services-section-pic"></div>
            </div>
            <div className="services-page-main">
                <Services />
            </div>
            <div className="latest-proj-btn text-center mt-8 services-btn">
                <Link to = "/contact"><button className="latest-proj-btn-main">Contact Us Now</button></Link>
            </div>
        </div>
    )
}

export default Service