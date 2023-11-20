import { Helmet } from 'react-helmet-async';
import ChefService from '../Home/Service/ChefService';
import menuBanner from "../../assets/assets/menu/banner3.jpg";
import desertBanner from "../../assets/assets/menu/dessert-bg.jpeg";
import pizzaBanner from "../../assets/assets/menu/pizza-bg.jpg";
import saladBanner from "../../assets/assets/menu/salad-bg.jpg";
import soupBanner from "../../assets/assets/menu/soup-bg.jpg";
import SubHeading from '../../components/SubHeading/SubHeading';
import MenuCategory from './MenuCategory';
import useMenu from '../../hooks/useMenu';

const Menu = () => {

    const [menu] = useMenu([]);

    const offered = menu.filter(item => item.category === "offered");
    const dessert = menu.filter(item => item.category === "dessert");
    const pizza = menu.filter(item => item.category === "pizza");
    const salad = menu.filter(item => item.category === "salad");
    const soup = menu.filter(item => item.category === "soup");

    return (
        <div className='max-w-screen-2xl mx-auto'>
            <Helmet>
            <title>Bistro Boss | Menu</title>
            </Helmet>
            <ChefService chefImg={menuBanner} title="OUR MENU" description="Would you like to try a dish?" backgroundColor={"bg-[#15151599]"} text="text-white"></ChefService>
            <SubHeading heading="TODAY'S OFFER" subHeading="Don't miss"></SubHeading>
            <MenuCategory items={offered} ></MenuCategory>
            <MenuCategory items={dessert} title="desserts" description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." backgroundColor="bg-[#15151599]" text="text-white" chefImg={desertBanner}></MenuCategory>
            <MenuCategory items={pizza} title="pizza" description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." backgroundColor="bg-[#15151599]" text="text-white" chefImg={pizzaBanner}></MenuCategory>
            <MenuCategory items={salad} title="salads" description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." backgroundColor="bg-[#15151599]" text="text-white" chefImg={saladBanner}></MenuCategory>
            <MenuCategory items={soup} title="soups" description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." backgroundColor="bg-[#15151599]" text="text-white" chefImg={soupBanner}></MenuCategory>
        </div>
    );
};

export default Menu;