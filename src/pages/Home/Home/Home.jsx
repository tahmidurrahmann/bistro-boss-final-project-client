import MenuItems from "../../shared/MenuItems/MenuItems";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefService from "../Service/ChefService";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <ChefService></ChefService>
            <MenuItems></MenuItems>
        </div>
    );
};

export default Home;