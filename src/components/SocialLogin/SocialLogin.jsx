import useAuth from "../../hooks/useAuth";
import { BsGoogle } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import toast from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {

    const { googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result=> {
            const userInfo = {
                name : result.user?.displayName,
                email : result.user?.email,
            }
            axiosPublic.post(`/users`,userInfo)
            .then(() => {
                toast.success("Google signIn Successful")
                navigate(from, { replace: true })
            })
        })
        .catch(error => {
            toast.error(error.message)
        })
    }

    return (
        <div className='flex gap-12 mt-4 justify-center items-center'>
            <span ><FaFacebookF size={30} className='border border-[#444] p-2 rounded-full'></FaFacebookF></span>
            <span ><BsGoogle onClick={handleGoogleSignIn} size={30} className='border border-[#444] p-2 rounded-full'></BsGoogle></span>
            <span ><AiFillGithub size={30} className='border border-[#444] p-2 rounded-full'></AiFillGithub></span>
        </div>
    );
};

export default SocialLogin;