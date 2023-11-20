import AboutImg from "../assets/images/about-left.jpg"
import checkMark from "../assets/images/checkbox.png"
const About = () => {
    return (
        <div className="border-t pt-4">
            {/* <div className="about-intro">
                <p className="font-semibold text-gray-600">01. Who we are</p>
            </div> */}
            <div className="about-content flex justify-between mt-12 gap-16">
                <div className="about-content-img w-1/2">
                    <img src={AboutImg} alt="about landing" className="h-full" />
                </div>
                <div className="about-content-captions border-l w-1/2 py-10 pl-16">
                    <div className="about-content-caption-inner">
                        <h1 className="font-bold text-5xl">ACKNOWLEDGED AS ONE OF THE BEST</h1>
                        <p className="mt-4 text-gray-600 font-medium leading-normal">Welcome to Moi Chemineer Limited, where engineering excellence and innovation converge to shape a future of limitless possibilities. We take pride in being at the forefront of technological advancements.</p>
                        <div className="about-lists mt-4">
                            <div className="flex">
                                <div className="w-1/12"><img className="about-checkbox" src={checkMark} alt="about-checkbox"/></div>
                                <div className="w-11/12 pt-1"><p className="font-bold">QUALITY DELIVERY IS OUR TOP PRIORITY</p></div>
                            </div>
                            <div className="flex mt-4">
                                <div className="w-1/12"><img className="about-checkbox" src={checkMark} alt="about-checkbox"/></div>
                                <div className="w-11/12 pt-1"><p className="font-bold">VERSATILE AND EXPERIENCED PROFESSIONALS</p></div>
                            </div>
                            <div className="flex mt-4">
                                <div className="w-1/12"><img className="about-checkbox" src={checkMark} alt="about-checkbox"/></div>
                                <div className="w-11/12 pt-1"><p className="font-bold">OUR ENGINEERING SOLUTIONS STAND OUT</p></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default About