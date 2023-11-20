import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import './login.css'
import { Helmet } from 'react-helmet-async';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import SocialLogin from '../../components/SocialLogin/SocialLogin';
// import SocialLogin from "../../components/SocialLogin"

const Login = () => {

    const [disabled, setDisabled] = useState(true);
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const from = location.state?.from?.pathname || "/";
    console.log(location.state);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
        .then(() => {
            toast.success("Your login is successful")
            navigate(from, { replace: true })
        })
        .catch(error => {
            const message = error.message;
            toast.error(message)
        })
    }

    const handleValidateCaptcha = (e) => {
        const validate_user = e.target.value;
        if (validateCaptcha(validate_user)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }

    return (
        <div className="hero min-h-screen background">
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div className="hero-content flex-col w-full lg:flex-row background shadow-2xl">
                <div className="text-center flex-1 lg:text-left w-1/2 mx-auto">
                    <img src="https://i.ibb.co/BzdF3SX/authentication1-removebg-preview.png" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full flex-1 max-w-xl">
                    <h1 className="text-3xl text-center font-extrabold">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control my-3">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" name='email' required />
                        </div>
                        <div className="form-control my-3">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                        </div>
                        <div className="form-control my-3">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input type="text" onBlur={handleValidateCaptcha} placeholder="Type here captcha text" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input disabled={disabled} className={`py-3 rounded-xl text-white font-bold w-full ${disabled ? "bg-gray-200" : "bg-[#D1A054]"}`} type="submit" value="Sign In" />
                        </div>
                    </form>
                    <p className="text-[#D1A054] font-medium text-center mb-4">New here?  <Link className='font-bold' to="/register">Create a New Account</Link></p>
                    <p className="mb-3 text-center text-[#444] font-medium">Or sign in with</p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;