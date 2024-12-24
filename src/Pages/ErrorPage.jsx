import Lottie from "lottie-react";
import error from '../assets/lottie/erorrLottie.json'
import { Link } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Helmet } from "react-helmet";

const ErrorPage = () => {
    return (
        <div>
            <Helmet>
    <title>ErrorPage |Riyal`s Cuisine</title>
</Helmet>
            <div className="w-11/12 h-[700px] mx-auto"><Lottie className="w-full h-full" animationData={error}></Lottie></div>
           <div className="text-center my-5"> <Link className="btn text-center bg-blue-100" to='/'><FaArrowCircleLeft></FaArrowCircleLeft>Back to Home Page</Link></div>
        </div>
    );
};

export default ErrorPage;