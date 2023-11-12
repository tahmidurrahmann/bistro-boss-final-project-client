const ShopItems = ({ items }) => {

    const { image, name, price, recipe } = items;

    return (
        <div className="p-6 lg:p-0">
             <div className="card bg-[#F3F3F3] shadow-xl">
                    <figure><img className="h-[300px] w-full" src={image} alt="Shoes" /></figure>
                    <p className="absolute bg-black px-4 py-1 text-white right-0 mt-4 mr-4">{price}</p>
                    <div className="card-body text-center space-y-2">
                        <h2 className="text-[#151515] font-bold text-2xl">{name}</h2>
                        <p>{recipe}</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-secondary btn-outline">Add to cart</button>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default ShopItems;