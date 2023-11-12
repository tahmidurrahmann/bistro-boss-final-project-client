import SubHeading from "../../../components/SubHeading/SubHeading";
import useMenu from "../../../hooks/useMenu";
import MenuCard from "../MenuCard/MenuCard";

const MenuItems = () => {

    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === "popular");

    return (
        <div>
            <SubHeading heading={"FROM OUR MENU"} subHeading={"Check it out"}></SubHeading>
            <div className="grid md:grid-cols-2 gap-10 my-10 md:my-20">
                {
                    popular.map(item => <MenuCard key={item._id} item={item}></MenuCard>)
                }
            </div>
            <div className="flex justify-center my-10">
                <button className="text-[#1F2937] btn btn-outline font-medium pb-1.5 uppercase border-b-2 border-0">View Full  Menu</button>
            </div>
        </div>
    );
};

export default MenuItems;