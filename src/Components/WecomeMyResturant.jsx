import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import 'swiper/css';
import 'swiper/css/effect-cards';
import '../Components/welcomyresturant.css'
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from '../assets/bgImages/g1.avif'
import image2 from '../assets/bgImages/g2.avif'
import image3 from '../assets/bgImages/g3.avif'
import image4 from '../assets/bgImages/g4avif.avif'
import image5 from '../assets/bgImages/g5avif.avif'
import image6 from '../assets/bgImages/g6.avif'
import { Fade } from "react-awesome-reveal";



const WecomeMyResturant = () => {
    return (
        <div className="hero place-items-start  min-h-[500px] my-12">
  <div className="hero-content flex-col m-0 justify-start    lg:flex-row">
    <div className="flex justify-start lg:w-1/2 items-center">
    <div className="w-[250px] mb-10 lg:mb-0 md:w-[350px] mx-auto mt-5 text-center lg:w-[400px]">
    
    <Swiper
      effect={'cards'}
     
      grabCursor={true}
      modules={[EffectCards]}
      className="h-[320px] w-[240px]"
    >
      <SwiperSlide ><img className='hover:scale-110 rounded-2xl h-72 w-[420px]' src={image1} alt="" /></SwiperSlide>
      <SwiperSlide ><img className='hover:scale-110 rounded-2xl h-72 w-[420px] ' src={image2} alt="" /></SwiperSlide>
      <SwiperSlide ><img className='hover:scale-110 rounded-2xl h-72 w-[420px]' src={image3} alt="" /></SwiperSlide>
      <SwiperSlide ><img className='hover:scale-110 rounded-2xl h-72 w-[420px]' src={image4} alt="" /></SwiperSlide>
      <SwiperSlide ><img className='hover:scale-110 rounded-2xl h-72 w-[420px]' src={image5} alt="" /></SwiperSlide>
      <SwiperSlide ><img className='hover:scale-110 rounded-2xl h-72 w-[420px]' src={image6} alt="" /></SwiperSlide>
     
      </Swiper>
  </div>
    </div>
    <div className="w-full lg:w-1/2 mx-auto ml-0 " >
    <Fade direction="top-left">
      <h1 className="text-5xl font-bold font-Handlee">WelCome <br />Riyal`s Cuisine Resturant</h1>
      <h3 className="text-lg font-semibold my-4"> A warm greeting inviting guests to experience a dining establishment known for its unique flavors, exceptional service, and a delightful culinary journey.</h3>
      <p className="py-4">
      heartfelt invitation to explore a world of exquisite flavors and authentic dishes. This dining destination prides itself on exceptional hospitality, a cozy ambiance, and a menu crafted to delight every palate. Experience culinary artistry and unforgettable moments at Riyals Cuisine Restaurant, where flavor meets passion
      </p>
     <Link to='/gallery'> <button className="btn btn-primary font-semibold font-Handlee">GO Our Gallary <FaArrowAltCircleRight></FaArrowAltCircleRight></button></Link>
     </Fade>
    </div>
  </div>
</div>
    );
};

export default WecomeMyResturant;