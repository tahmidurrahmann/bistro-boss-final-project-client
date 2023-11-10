import chefImg from "../../../assets/assets/home/chef-service.jpg"

const ChefService = () => {
    return (
        <div className="relative">
            <img src={chefImg} alt="" />
            <div className="absolute top-6 p-3 rounded md:top-20 left-10 md:left-20 lg:top-36 w-3/4 lg:left-44 md:p-10 lg:p-20 text-center bg-white md:space-y-3">
                <h1 className="lg:text-4xl text-xl  font-cinzel">Bistro Boss</h1>
                <p className="lg:w-3/4 mx-auto text-xs lg:text-base">Exquisite flavors served with a side of genuine hospitality—a dining experience that transcends taste and leaves memories.</p>
            </div>
        </div>
    );
};

export default ChefService;