import Team from "../components/Team";
import OurClients from "../components/OurClients";

const About = () => {
    return(
        <div className="about-main">
                <div className="main-about-hero">
                    <div className="about-heading-main text-center mt-48">
                        <h1 className="font-bold text-5xl text-center text-white">About Us</h1>
                        <div className="w-1/12 services-span"></div>
                    </div>
               </div> 
                <div className="about-page-content">
                    <h1 className="font-bold text-4xl text-center">We are Innovative</h1>
                </div>
                <div className="about-page-section flex px-12 py-4 gap-6">
                    <div className="w-1/2 about-section-cap">
                        <h1 className="font-semibold text-3xl">About Our Company</h1>
                        <p className="mt-4">Welcome to where innovation and engineering excellence meet, Moi Chemineer. Our goal at Moi Chemineer is to push the limits of engineering to produce products that dramatically alter the norm in the sector. Incorporated in 2013 as a Construction, process Engineering, Management and Consultancy service company, we have render services to over 100 oil and gas industries. We have a team of experienced engineers with proven track records</p>
                        <h1 className="font-bold mt-4 mission-statement">Our Mission</h1>
                        <p>Moi Chemineer Ltd is commited to making a world class difference in engineering, construction, plant design and development, as well as fundamental process research and engineering solution. To be the number one company provider of total quality service and Engineering Solutions</p>
                    </div>
                    <div className="w-1/2 about-section-pic"></div>
                </div>
                <div className="about-team mt-20">
                    <Team />
                </div>
                <div className="about-testimonials mt-20 py-10">
                    <OurClients />
                </div>
            </div>
    )
}
export default About;