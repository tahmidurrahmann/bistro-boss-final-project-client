import { useEffect, useState } from "react";
import SubHeading from "../../../components/SubHeading/SubHeading";
import MenuCard from "../MenuCard/MenuCard";

const MenuItems = () => {

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const offeredItems = data.filter(item => item.category === "offered")
                setMenu(offeredItems);
            })
    }, [])

    return (
        <div>
            <SubHeading heading={"FROM OUR MENU"} subHeading={"Check it out"}></SubHeading>
            <div className="grid md:grid-cols-2 gap-10 my-10 md:my-20">
                {
                    menu.map(item => <MenuCard key={item._id} item={item}></MenuCard>)
                }
            </div>
            <div className="flex justify-center my-10">
                <button className="text-[#1F2937] font-medium pb-1.5 uppercase border-b-2">View Full  Menu</button>
            </div>
        </div>
    );
};

export default MenuItems;