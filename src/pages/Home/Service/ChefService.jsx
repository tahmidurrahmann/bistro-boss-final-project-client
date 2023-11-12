import { Parallax } from 'react-parallax';


const ChefService = ({ chefImg, title, description, backgroundColor, text }) => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={chefImg}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div className="hero h-[300px] md:h-[400px] lg:h-[700px]">
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className={`p-4 md:p-8 lg:px-72 lg:py-24 ${backgroundColor}`}>
                        <div className={`${text}`}>
                            <h1 className="mb-5 lg:text-5xl font-bold uppercase font-cinzel">{title}</h1>
                            <p className="mb-5 font-cinzel">{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default ChefService;