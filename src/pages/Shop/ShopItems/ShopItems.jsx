import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCarts from "../../../hooks/useCarts";

const ShopItems = ({ item }) => {
    const { image, _id, name, recipe, price } = item;
    const { user } = useAuth();
    const [,refetch] = useCarts();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();

    const handleAddToCart = (food) => {
        if (user && user.email) {
            const cartItems = {
                menuId: _id,
                email: user.email,
                image: food.image,
                name: food.name,
                price : food.price,
            }
            axiosSecure.post('/carts',cartItems)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            title: "Good job!",
                            text: `${name} is added Successfully`,
                            icon: "success"
                        });
                        refetch();
                    }
                })
        }
        else {
            Swal.fire({
                title: "You must login for adding this cart?",
                text: "Please go to login page!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } });
                }
            });
        }
    }

    return (
        <div>
            <div className="card bg-[#F3F3F3] shadow-xl">
                <figure><img className="h-[300px] w-full" src={image} alt="Shoes" /></figure>
                <p className="bg-black px-3 rounded-lg text-white absolute right-0 top-3 mr-3">{price}</p>
                <div className="card-body text-center space-y-2">
                    <h2 className="text-[#151515] font-semibold text-2xl">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-center">
                        <button onClick={() => handleAddToCart(item)} className="btn btn-secondary btn-outline">add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopItems;