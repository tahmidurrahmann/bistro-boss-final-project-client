import moment from 'moment/moment';
import featured from '../../../assets/assets/home/featured.jpg'
import SubHeading from '../../../components/SubHeading/SubHeading';
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured-image bg-fixed py-4  md:py-10 my-10 text-white bg-slate-800 bg-blend-screen'>
            <SubHeading heading={"TESTIMONIALS"} subHeading={"What Our Clients Say"}></SubHeading>
            <div className='md:flex justify-center items-center p-8 md:my-20 my-10 md:px-36 md:py-20 gap-8 space-y-5'>
                <div>
                    <img src={featured} alt="" />
                </div>
                <div className='space-y-2'>
                    <h1>{moment().format("dddd, MMMM Do YYYY")}</h1>
                    <p className='uppercase'>WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt maxime autem ratione corporis placeat, at commodi neque, ad sequi repudiandae beatae, nostrum deserunt quidem quis suscipit. Aliquid, expedita voluptates. Expedita est autem, amet hic nemo veritatis quaerat cum nisi exercitationem error! Quo maiores, corrupti accusamus error quaerat natus consectetur repellendus!</p>
                    <button className='btn btn-outline border-0 border-b-2'>Order Now!</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;