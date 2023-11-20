import ChefService from "../../Home/Service/ChefService";
import shopBanner from '../../../assets/assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import ShopItems from "../ShopItems/ShopItems";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Shop = () => {

    const categories = ["salads", "pizza", "soups", "desserts", "drinks"];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [indexNum, setIndexNum] = useState(initialIndex);
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === "dessert");
    const pizza = menu.filter(item => item.category === "pizza");
    const salad = menu.filter(item => item.category === "salad");
    const soup = menu.filter(item => item.category === "soup");
    const drinks = menu.filter(item => item.category === "drinks");

    return (
        <div className='max-w-screen-2xl mx-auto'>
            <Helmet>
                <title>Bistro Boss | Our Shop</title>
            </Helmet>
            <ChefService chefImg={shopBanner} backgroundColor="bg-[#15151599]" text="text-white" title="OUR SHOP" description="Would you like to try a dish?"></ChefService>
            <Tabs defaultIndex={indexNum} onSelect={(index) => setIndexNum(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>

                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {
                            salad.map(item => <ShopItems key={item._id} item={item}></ShopItems>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {
                            pizza.map(item => <ShopItems key={item._id} item={item}></ShopItems>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {
                            soup.map(item => <ShopItems key={item._id} item={item}></ShopItems>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {
                            dessert.map(item => <ShopItems key={item._id} item={item}></ShopItems>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {
                            drinks.map(item => <ShopItems key={item._id} item={item}></ShopItems>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Shop;