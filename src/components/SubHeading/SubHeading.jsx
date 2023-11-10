const SubHeading = ({heading, subHeading}) => {
    return (
        <div className="w-1/2 lg:w-1/5 mx-auto my-5 text-center">
            <p className="text-yellow-600 mb-3">--- {subHeading} ---</p>
            <h2 className="text-2xl border-y-2 py-2 uppercase">{heading}</h2>
        </div>
    );
};

export default SubHeading;