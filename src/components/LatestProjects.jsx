import { Link } from 'react-router-dom';


const LatestProjects = () => {
    return(
        <div className="latest-proje-main px-16 py-4 mt-2">
            <div className="latest-poject-heading">
                <h1 className="font-bold text-4xl text-center">Our Latest Projects</h1>
                <div className="w-1/12 services-span"></div>
                <p className="mt-3 text-xl font-medium text-gray-500 text-center">Our recent projects showcase our dedication to staying at the forefront of industry advancements</p>
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
                        <div className="latest-proj-img-two  ">
                        </div>
                        <h1 className="mt-4 text-center font-bold text-lg">
                            Rehabilitation
                        </h1>
                        <p className="text-center text-gray-400">EMADEB Depot</p>
                    </div>
                    <div className="latest-proj-left w-1/3   bg-white pb-8">
                        <div className="latest-proj-img-three  ">   
                        </div>
                        <h1 className="mt-4 text-center font-bold text-lg">
                            Rehabilitation
                        </h1>
                        <p className="text-center text-gray-400">First Deep water depot</p>
                    </div>
                </div>
                <div className="latest-proj-btn text-center mt-8">
                    <Link to = "/portfolio">
                        <button className="latest-proj-btn-main">View Our Portfolio →</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LatestProjects;