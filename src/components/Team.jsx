
const Team = () => {
    return(
        <div className="team-main  py-6 px-12">
            <h1 className="font-bold text-4xl text-center">Meet The Team</h1>
            <div className="w-1/12 services-span"></div>
            <p className="mt-3 text-xl font-medium text-gray-500 text-center">Our team brings a wealth of engineering knowledge and experience to the forefront</p>
            <div className="mt-10 meet-the-team flex gap-6 px-4">
                <div className="team-item team-one w-1/4   ">
                    <div className="team-img-one rounded-full   ">
                        {/* <div className="team-menu">

                        </div> */}
                    </div>
                    <h1 className="font-semibold mt-4 text-center text-lg">Engr. Oyemade Muritala</h1>
                    <h2 className="font-medium mt-2 text-center text-md">Managing Director</h2>
                </div>
                <div className="team-item team-two w-1/4   ">
                    <div className="team-img-two rounded-full   "></div>
                    <h1 className="font-semibold mt-4 text-center text-lg">Engr. Fadipe Opeyemi</h1>
                    <h2 className="font-medium mt-2 text-center text-md">Executive director(operational)</h2>
                </div>
                <div className="team-item team-three w-1/4   ">
                    <div className="team-img-three rounded-full   "></div>
                    <h1 className="font-semibold mt-4 text-center text-lg">Mrs Oyemade Olumayowa</h1>
                    <h2 className="font-medium mt-2 text-center text-md">Executive director(corporate)</h2>
                </div>
                <div className="team-item team-four w-1/4   ">
                    <div className="team-img-four rounded-full   "></div>
                    <h1 className="font-semibold mt-4 text-center text-lg">Engr. Abdulsalem Malik</h1>
                    <h2 className="font-medium mt-2 text-center text-md">Operation Manager</h2>
                </div>
            </div>
        </div>
    )
}

export default Team