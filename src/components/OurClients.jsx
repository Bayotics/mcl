import { Carousel } from 'flowbite-react';
import menjoil from "../assets/images/logos/menjoil.png";
import chipet from "../assets/images/logos/chipet.png";
import fiiro from "../assets/images/logos/fiiro.png";
import oando from "../assets/images/logos/oando.png";
import chevron from "../assets/images/logos/chevron-logo.png";
import alinco from "../assets/images/logos/alinco.png";
import total from "../assets/images/logos/total.png";
import wosbab from "../assets/images/logos/wosbab.png";

const OurClients = () => {
    return(
        <div className="testimonials-main px-6 py-4">
            <div className="testimonials-heading">
                <h1 className="font-bold text-4xl text-center text-white">Testimonials</h1>
                <div className="w-1/12 testimonials-span"></div>
            <p className="mt-3 text-xl font-medium text-white text-center">Here is what some of our clients say about us</p>
            </div>
            <div className='testimonial-carousel   mt-10 px-8 py-4'>
                <Carousel>
                    <div className='testimonial-carousel-one'>
                        <div className='test-one  '>
                            <div className='clients-img-one rounded-full   mt-6'>
                            </div>
                            <p className='mt-4 text-white text-center text-xl'><span className='font-bold text-3xl'>❝</span> The commitment to quality and customer satisfaction is truly commendable. Moi Chemineer has become our trusted partner, and I highly recommend their services to anyone in need of top-notch chemical engineering expertise<span className='font-bold text-3xl'>❞</span></p>
                            <h1 className='font-bold text-2xl text-center text-green-300 mt-4'>Gabriella Farell, Alan Oil</h1>
                        </div>
                    </div>
                    <div className='testimonial-carousel-one'>
                        <div className='test-one  '>
                            <div className='clients-img-two rounded-full   mt-6'>
                            </div>
                            <p className='mt-4 text-white text-center text-xl'><span className='font-bold text-3xl'>❝</span> What sets Moi Chemineer apart is their ability to translate complex technical concepts into practical and cost-effective solutions<span className='font-bold text-3xl'>❞</span></p>
                            <h1 className='font-bold text-2xl text-center text-green-300 mt-4'>John Snow, Operations Manager, Green Synthetics Ltd</h1>
                        </div>
                    </div>
                    <div className='testimonial-carousel-one'>
                        <div className='test-one  '>
                            <div className='clients-img-three rounded-full   mt-6'>
                            </div>
                            <p className='mt-4 text-white text-center text-xl'><span className='font-bold text-3xl'>❝</span> Working with Moi Chemineer has been a game-changer for our company, and we highly recommend their services to anyone seeking expertise in chemical engineering<span className='font-bold text-3xl'>❞</span></p>
                            <h1 className='font-bold text-2xl text-center text-green-300 mt-4'>Dr. Carter, Chief Scientist, BioInnovate Solutions</h1>
                        </div>
                    </div>
                </Carousel>
            </div>
            <div className='  customers mt-8'>
                <div className= "customers-main  ">
                    <h1 className='font-bold text-4xl text-center text-white'>Selected Clients</h1>
                    <div className="w-1/12 testimonials-span"></div>
                    <p className='mt-4 text-center text-lg text-white'>Our clients span across various sectors, including petrochemicals, process, materials, and more</p>
                    <div className='clients-upper mt-12 px-4   flex gap-4'>
                        <div className='  w-1/4 client-one'>
                            <img className='' src = {menjoil} alt='menjoil logo' />
                        </div>
                        <div className='  w-1/4 client-one'>
                            <img src = {chipet} alt='menjoil logo' />
                        </div>
                        <div className='  w-1/4 client-one'>
                            <img src = {fiiro} alt='menjoil logo' />
                        </div>
                        <div className='  w-1/4 client-one'>
                            <img src = {oando} alt='menjoil logo' />
                        </div>
                    </div>
                    <div className='clients-lower mt-12 px-4   flex gap-4'>
                        <div className='  w-1/4 client-one'>
                            <img className='' src = {chevron} alt='menjoil logo' />
                        </div>
                        <div className='  w-1/4 client-one'>
                            <img src = {alinco} alt='menjoil logo' />
                        </div>
                        <div className='  w-1/4 client-one'>
                            <img src = {total} alt='menjoil logo' />
                        </div>
                        <div className='  w-1/4 client-one'>
                            <img src = {wosbab} alt='menjoil logo' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurClients