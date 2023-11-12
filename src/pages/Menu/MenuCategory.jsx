import { Link } from "react-router-dom";
import ChefService from "../Home/Service/ChefService";
import MenuCard from "../shared/MenuCard/MenuCard";

const MenuCategory = ({ items, title, description, backgroundColor, text, chefImg }) => {
    return (
        <div>
            {
                title && <ChefService title={title} description={description} backgroundColor={backgroundColor} text={text} chefImg={chefImg}></ChefService>
            }
            <div className="grid md:grid-cols-2 gap-10 mt-10 md:mt-20">
                {
                    items.map(item => <MenuCard key={item._id} item={item}></MenuCard>)
                }
            </div>
            <div className="flex justify-center items-center">
                <Link to={`/shop/${title}`}>
                    <button className='btn btn-outline border-0 my-5 border-b-2'>ORDER YOUR FAVOURITE FOOD</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;