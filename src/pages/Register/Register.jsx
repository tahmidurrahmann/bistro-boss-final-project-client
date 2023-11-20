import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import toast from 'react-hot-toast';
import { getAuth, updateProfile } from "firebase/auth";
import useAxiosPublic from '../../hooks/useAxiosPublic';
import SocialLogin from '../../components/SocialLogin/SocialLogin';
const auth = getAuth();

const Register = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                updateProfile(auth.currentUser, {
                    displayName: data?.name,
                    photoURL: data?.photo
                }).then(() => {
                    const userInfo = {
                        name: data?.name,
                        email: data?.email,
                    }
                    axiosPublic.post('/users', userInfo)
                        .then(res => {
                            if (res.data.insertedId) {
                                toast.success("Profile created successful");
                                reset();
                                navigate("/");
                                console.log("user created");
                            }
                        })
                }).catch((error) => {
                    toast.error(error.message)
                });
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    return (
        <div className="hero min-h-screen background">
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
            <div className="hero-content flex-col w-full lg:flex-row-reverse background shadow-2xl">
                <div className="text-center flex-1 lg:text-left w-1/2 mx-auto">
                    <img src="https://i.ibb.co/BzdF3SX/authentication1-removebg-preview.png" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full flex-1 max-w-xl">
                    <h1 className="text-3xl text-center font-extrabold">Sign Up</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control my-3">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} placeholder="Name" className="input input-bordered" name='name' />
                            {errors.name && <span className='text-red-600'>This field is required</span>}
                        </div>
                        <div className="form-control my-3">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" {...register("photo", { required: true })} placeholder="Photo" className="input input-bordered" />
                            {errors.photo && <span className='text-red-600'>This field is required</span>}
                        </div>
                        <div className="form-control my-3">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })}
                                placeholder="email" className="input input-bordered" name='email' />
                            {errors.email && <span className='text-red-600'>This field is required</span>}
                        </div>
                        <div className="form-control my-3">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"
                                {...register("password", { required: true, maxLength: 20, minLength: 6, pattern: /(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/ })} placeholder="password" name='password' className="input input-bordered" />
                            {errors.password?.type === "required" && (
                                <p className='text-red-600'>Password is required</p>
                            )}
                            {errors.password?.type === "maxLength" && (
                                <p className='text-red-600'>Password is not more than 20 characters</p>
                            )}
                            {errors.password?.type === "minLength" && (
                                <p className='text-red-600'>Password must be 6 characters</p>
                            )}
                            {errors.password?.type === "pattern" && (
                                <p className='text-red-600'>Password must contain a number, a capital letter, a small letter and special character</p>
                            )}
                        </div>

                        <div className="form-control mt-6">
                            <input className="py-3 rounded-xl text-white font-bold w-full bg-[#D1A054]" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className="text-[#D1A054] font-medium text-center mb-4">Already registered?  <Link className='font-bold' to="/login">Go to log in</Link></p>
                    <p className="mb-3 text-center text-[#444] font-medium">Or sign in with</p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Register;