import { Helmet } from "react-helmet-async";
import MenuItems from "../../shared/MenuItems/MenuItems";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefItems from "../ChefItems/ChefItems";
import Contact from "../Contact/Contact";
import Featured from "../Featured/Featured";
import ChefService from "../Service/ChefService";
import Testimonials from "../Testimonials/Testimonials";
import chefImg from "../../../assets/assets/home/chef-service.jpg"

const Home = () => {
    return (
        <div className='max-w-screen-2xl mx-auto'>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <ChefService chefImg={chefImg} title="Bistro Boss" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione!" backgroundColor="bg-white" text="text-black"></ChefService>
            <MenuItems></MenuItems>
            <Contact></Contact>
            <ChefItems></ChefItems>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;