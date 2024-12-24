import image1 from '../assets/bgImages/g1.avif'
import image2 from '../assets/bgImages/g2.avif'
import image3 from '../assets/bgImages/g3.avif'
import image4 from '../assets/bgImages/g4avif.avif'
import image5 from '../assets/bgImages/g5avif.avif'
import image6 from '../assets/bgImages/g6.avif'
import image7 from '../assets/bgImages/g7.avif'
import image8 from '../assets/bgImages/g8.avif'
import image9 from '../assets/bgImages/g9.avif'
import image10 from '../assets/bgImages/g10.avif'
import image11 from '../assets/bgImages/g11.avif'
import image12 from '../assets/bgImages/g12.avif'
import image13 from '../assets/bgImages/g13.jpg'
import image14 from '../assets/bgImages/g14.avif'
import image15 from '../assets/bgImages/g15.jpg'
import image16 from '../assets/bgImages/g16.avif'


const Gallary = () => {
    return (
        <div>
            <div className="bg-gallarybg mb-20 bg-cover h-[300px]">
                <div className="w-full h-full flex items-center justify-center text-center">
                    <div className="text-center text-green-700 md:w-10/12 lg:w-8/12">
                        <h1 className="text-center text-4xl font-bold">Track Every Order in Real Time to Enhance Service Quality</h1>
                        <p className="my-5 text-white">Exceed customer expectations by optimizing operations, enhancing service quality, and creating unforgettable moments that keep diners returning for more.</p>

                    </div>
                </div>
            </div>
            <div>
                <div className='grid gap-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    
                    <img className='hover:scale-110 h-72 w-full' src={image1} alt="" />
                    <img className='hover:scale-110 h-72 w-full' src={image2} alt="" />
                    <img className='hover:scale-110 h-72 w-full' src={image3} alt="" />
                    <img className='hover:scale-110 h-72 w-full' src={image4} alt="" />
                    <img className='hover:scale-110 h-72 w-full' src={image5} alt="" />
                    <img className='hover:scale-110 h-72 w-full' src={image6} alt="" />
                    <img className='hover:scale-110 h-72 w-full' src={image7} alt="" />
                    <img className='hover:scale-110 h-72 w-full' src={image8} alt="" />
                    <img className='hover:scale-110 h-72 w-full' src={image9} alt="" />
                    <img className='hover:scale-110 h-72 w-full' src={image10} alt="" />
                    <img className='hover:scale-110 h-72 w-full' src={image11} alt="" />
                    <img className='hover:scale-110 h-72 w-full' src={image12} alt="" />
                    <img className='hover:scale-110 h-72 w-full' src={image13} alt="" />
                    <img className='hover:scale-110 h-72 w-full' src={image14} alt="" />
                    <img className='hover:scale-110 h-72 w-full' src={image15} alt="" />
                    <img className='hover:scale-110 h-72 w-full' src={image16} alt="" />
                </div>

            </div>
        </div>
    );
};

export default Gallary;