import SubHeading from "../../../components/SubHeading/SubHeading";
import img from "../../../assets/assets/home/slide1.jpg"

const ChefItems = () => {
    return (
        <div>
            <SubHeading heading={"CHEF RECOMMENDS"} subHeading={"Should Try"}></SubHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 p-6 lg:p-3 lg:grid-cols-3 gap-6 my-10 md:my-20">
                <div>
                    <div className="card bg-[#F3F3F3] shadow-xl">
                        <figure><img className="h-[300px] w-full" src={img} alt="Shoes" /></figure>
                        <div className="card-body text-center space-y-2">
                            <h2 className="text-[#151515] font-semibold text-2xl">Caeser Salad</h2>
                            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                            <div className="card-actions justify-center">
                                <button className="btn btn-secondary btn-outline">add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card bg-[#F3F3F3] shadow-xl">
                        <figure><img className="h-[300px] w-full" src={img} alt="Shoes" /></figure>
                        <div className="card-body text-center space-y-2">
                            <h2 className="text-[#151515] font-semibold text-2xl">Caeser Salad</h2>
                            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                            <div className="card-actions justify-center">
                                <button className="btn btn-secondary btn-outline">add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card bg-[#F3F3F3] shadow-xl">
                        <figure><img className="h-[300px] w-full" src={img} alt="Shoes" /></figure>
                        <div className="card-body text-center space-y-2">
                            <h2 className="text-[#151515] font-semibold text-2xl">Caeser Salad</h2>
                            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                            <div className="card-actions justify-center">
                                <button className="btn btn-secondary btn-outline">add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefItems;