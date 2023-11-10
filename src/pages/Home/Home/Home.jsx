import MenuItems from "../../shared/MenuItems/MenuItems";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefItems from "../ChefItems/ChefItems";
import Contact from "../Contact/Contact";
import ChefService from "../Service/ChefService";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <ChefService></ChefService>
            <MenuItems></MenuItems>
            <Contact></Contact>
            <ChefItems></ChefItems>
        </div>
    );
};

export default Home;