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
        </div>
    );
};

export default MenuItems;