

const Footer = () => {
    return (
        <div className="footer-main px-16   py-8">
            <div className="flex gap-6 footer-contents  ">
                <div className="footer-about w-1/4  ">
                    <h1 className="text-white font-bold">ABOUT MOI</h1>
                    <p className="text-gray-400 mt-6">Incorporated in 2013 as a Construction, process Engineering, Management and Consultancy service company, we have render services to over 100 oil and gas industries. We have a team of experienced engineers with proven track records.... </p>
                    <h2 className="text-green-300 mt-4 font-semibold">More About us →</h2>
                </div>
                <div className="footer-solutions w-1/4  ">
                    <h1 className="text-white font-bold">OUR SOLUTIONS</h1>
                    <div className="footer-list mt-4">
                        <div className="footer-list-item pb-2 pt-2 border-b border-gray-600">
                            <p className="text-gray-400">Engineering Construction</p>
                        </div>
                        <div className="footer-list-item pb-2 pt-2 border-b border-gray-600">
                            <p className="text-gray-400">Engineering Design</p>
                        </div>
                        <div className="footer-list-item pb-2 pt-2 border-b border-gray-600">
                            <p className="text-gray-400">Power & Energy</p>
                        </div>
                        <div className="footer-list-item pb-2 pt-2 border-b border-gray-600">
                            <p className="text-gray-400">Oil & Gas</p>
                        </div>
                        <div className="footer-list-item pb-2 pt-2 border-b border-gray-600">
                            <p className="text-gray-400">Project Management</p>
                        </div>
                        <div className="footer-list-item pb-2 pt-2">
                            <p className="text-gray-400">Maintenance</p>
                        </div>
                    </div>
                </div>
                <div className="footer-socials w-1/4">
                    <h1 className="text-white font-bold">SOCIAL MEDIA</h1>
                    <p className="text-gray-400 mt-6">Connect us on Social media</p>
                    <div className="flex social-icons gap-4 mt-6 w-4/6">
                        <div className=" social-ico w-1/5 border-2 justify-center text-center">
                            <i className="fa fa-facebook text-white" aria-hidden="true"></i>
                        </div>
                        <div className=" social-ico w-1/5 border-2 justify-center text-center">
                            <i className="fa fa-twitter text-white" aria-hidden="true"></i>
                        </div>
                        <div className=" social-ico w-1/5 border-2 justify-center text-center">
                            <i className="fa fa-instagram text-white" aria-hidden="true"></i>
                        </div>
                        <div className=" social-ico w-1/5 border-2 justify-center text-center">
                            <i className="fa fa-linkedin text-white" aria-hidden="true"></i>
                        </div>
                        <div className=" social-ico w-1/5 border-2 justify-center text-center">
                            <i className="fa fa-whatsapp text-white" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
                <div className="footer-contact w-1/4">
                    <h1 className="text-white font-bold">QUICK CONTACT</h1>
                    <p className="mt-4 text-gray-400">If you wish to contact us about any issue, our support available to help you 8am-7pm Monday to Saturday.</p>
                    <p className="text-gray-400 mt-4"><span className="pr-4"><i className="fa fa-map-marker" aria-hidden="true"></i></span> Suite 6, Block D, AOSEE Plaza, Festac Town Amuwo-odifin, Lagos, Nigeria</p>
                    <p className="text-gray-400 mt-4"><span className="pr-4"><i className="fa fa-phone" aria-hidden="true"></i></span>+234 (802) 249-3235</p>
                    <p className="text-gray-400 mt-4"><span className="pr-4"><i className="fa fa-envelope" aria-hidden="true"></i></span>moichemineerltd@gmail.com</p>
                </div>
            </div>
            <p className="text-xs mt-8 text-gray-400 text-center">Copyright © Moi chemineer Ltd 2023. All right reserved. design by <a href="https://twitter.com/unclebayotics"  target ="blank" className="footer-link">Unclebayotics</a></p>
        </div>
    )
}
export default Footer;