import engineer from "../assets/images/pngs/engineer.png";
import maxPower from "../assets/images/pngs/pipeline.png";
import oilRig from "../assets/images/pngs/rig.png";
import development from "../assets/images/pngs/development.png";
import flask from "../assets/images/pngs/flask.png";
import tank from "../assets/images/pngs/tank.png"
import gasStation from "../assets/images/pngs/gas_station.png"
import recycle from "../assets/images/pngs/recycle.png";
import { Link } from 'react-router-dom';



const WhyUs = () => {
    return(
        <div className="why-us-main  px-16 py-4">
            <div className="whyus-caption text-center  ">
                <h1 className="text-3xl font-bold">We Supply Energy</h1>
                <div className="w-1/12 services-span"></div>
                <p className="mt-4 text-gray-500 text-lg font-medium">To Numerous Customers, including Government Buildings, Residences, and Offices</p>
            </div>
            <div className="flex whyus-upper   mt-4">
                <div className="whyus-item   w-1/4 py-6">
                    <div className="why-us-img-main  ">
                        <img className="why-us-img" src = {engineer} alt="employees"/>
                    </div>
                    <div className="whyus-item-captions text-center mt-8 px-8">
                        <h1 className="font-medium">Dedicated Personnel</h1>
                        <p className="text-sm mt-2 text-gray-600">Together, we create a dynamic work environment where creativity thrives, and challenges are met with enthusiasm</p>
                    </div>
                </div>
                <div className="whyus-item   w-1/4 py-6">
                    <div className="why-us-img-main  ">
                        <img className="why-us-img" src = {maxPower} alt="employees"/>
                    </div>
                    <div className="whyus-item-captions text-center mt-8 px-8">
                        <h1 className=" font-medium">Peak Power</h1>
                        <p className="text-sm mt-2 text-gray-600">We harness maximum power from petroleum reservoirs, employing advanced technologies and innovative methodologies.</p>
                    </div> 
                </div>
                <div className="whyus-item   w-1/4 py-6">
                    <div className="why-us-img-main  ">
                        <img className="why-us-img" src = {oilRig} alt="employees"/>
                    </div>
                    <div className="whyus-item-captions text-center mt-8 px-8">
                        <h1 className=" font-medium">Oil Reserves</h1>
                        <p className="text-sm mt-2 text-gray-600">We ensure that our clients achieve the highest possible power output from their reservoir assets</p>
                    </div>  
                </div>
                <div className="whyus-item   w-1/4 py-6">
                    <div className="why-us-img-main  ">
                        <img className="why-us-img" src = {development} alt="employees"/>
                    </div>
                    <div className="whyus-item-captions text-center mt-8 px-8">
                        <h1 className=" font-medium">Development</h1>
                        <p className="text-sm mt-2 text-gray-600">We tailor development plans that optimize recovery and maximize economic returns</p>
                    </div>
                </div>
            </div>
            <div className="flex whyus-lower mt-4  ">
                <div className="whyus-item   w-1/4 py-6">
                    <div className="why-us-img-main  ">
                        <img className="why-us-img" src = {flask} alt="employees"/>
                    </div>
                    <div className="whyus-item-captions text-center mt-8 px-8">
                        <h1 className=" font-medium">Chemical Evaluation</h1>
                        <p className="text-sm mt-2 text-gray-600">We unravel the complexities of reservoir fluids, providing essential insights into their composition and behavior.</p>
                    </div>
                </div>
                <div className="whyus-item   w-1/4 py-6">
                    <div className="why-us-img-main  ">
                        <img className="why-us-img" src = {tank} alt="employees"/>
                    </div>
                    <div className="whyus-item-captions text-center mt-8 px-8">
                        <h1 className=" font-medium">We Combat Pollution</h1>
                        <p className="text-sm mt-2 text-gray-600">we develop and deploy eco-friendly drilling and extraction techniques</p>
                    </div> 
                </div>
                <div className="whyus-item   w-1/4 py-6">
                    <div className="why-us-img-main  ">
                        <img className="why-us-img" src = {gasStation} alt="employees"/>
                    </div>
                    <div className="whyus-item-captions text-center mt-8 px-8">
                        <h1 className=" font-medium">We Consider the Consumers</h1>
                        <p className="text-sm mt-2 text-gray-600">We prioritize the development of technologies and practices that enhance energy efficiency and product quality</p>
                    </div>  
                </div>
                <div className="whyus-item   w-1/4 py-6">
                    <div className="why-us-img-main  ">
                        <img className="why-us-img" src = {recycle} alt="employees"/>
                    </div>
                    <div className="whyus-item-captions text-center mt-8 px-8">
                        <h1 className=" font-medium">Environment Matters to Us</h1>
                        <p className="text-sm mt-2 text-gray-600">Our commitment to environmental stewardship is at the heart of our petroleum engineering practices</p>
                    </div>
                </div>
            </div>
            <div className="consulting-landing mt-32 flex">
                <div className="consulting-landing-left w-1/2 pb-8 px-4">
                    <h1 className="font-bold text-4xl">
                        Why our Consulting?
                    </h1>
                    <p className="mt-6 text-xl text-gray-500 leading-normal">Our consulting services at Moi are founded on a rich tapestry of experience, blending technical proficiency with a forward-thinking approach to address the dynamic challenges of the industry.</p>
                    <p className="mt-2 text-xl text-gray-500 leading-normal"> With a commitment to excellence, we provide tailored solutions that align with the unique goals and requirements of each client</p>
                    <Link to = '/contact'><button className="consult-btn mt-8">Contact Us Now</button></Link>
                </div>
                <div className="consulting-landing-right w-1/2">

                </div>
            </div>
        </div>
    )
}

export default WhyUs    