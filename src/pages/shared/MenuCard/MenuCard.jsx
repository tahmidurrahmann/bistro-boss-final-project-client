const MenuCard = ({ item }) => {

    const { image, name, price, recipe } = item;

    return (
        <div className="flex gap-2 p-3 md:p-1">
            <img style={{borderRadius : "0 200px 200px 200px"}} className="w-[118px] h-[104px]" src={image} alt="" />
            <div>
                <h2 className="font-cinzel text-xl">{name} ----------</h2>
                <p className="text-[#737373]">{recipe}</p>
            </div>
            <p className="text-yellow-500">${price}</p>
        </div>
    );
};

export default MenuCard;