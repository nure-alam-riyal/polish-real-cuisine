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
import { Helmet } from 'react-helmet'

import "yet-another-react-lightbox/styles.css";


import { Fullscreen, Thumbnails, Zoom } from 'yet-another-react-lightbox/plugins'
import React from 'react'
import {Lightbox} from 'yet-another-react-lightbox'

// import { initLightboxJS, SlideshowLightbox } from 'lightbox.js-react'
// import { useEffect } from 'react'


const Gallary = () => {
    const [open, setOpen] = React.useState(false);
    // useEffect(() => {
    //     initLightboxJS("Insert License key", "Insert plan type here");
    //   });
    return (
        <div>
            <Helmet>
    <title>Gallary|Riyal`s Cuisine</title>
</Helmet>
            <div className="bg-gallarybg mb-20 bg-cover h-[300px]">
                <div className="w-full h-full flex items-center justify-center text-center">
                    <div className="text-center text-green-700 md:w-10/12 lg:w-8/12">
                        <h1 className="text-center text-4xl font-bold">Track Every Order in Real Time to Enhance Service Quality</h1>
                        <p className="my-5 text-white">Exceed customer expectations by optimizing operations, enhancing service quality, and creating unforgettable moments that keep diners returning for more.</p>

                    </div>
                </div>
            </div>
            <div>
                <Lightbox
                open={open}
                close={() => setOpen(false)}
                plugins={[Zoom,Fullscreen,Thumbnails]}
                slides={[
                  { src:image1},
                  { src:image2 },
                  { src:image3 },
                  { src:image4 },
                  { src:image6 },
                  { src:image7 },
                  { src:image8 },
                  { src:image9 },
                  { src:image10 },
                  { src:image11 },
                  { src:image12 },
                  { src:image13 },
                  { src:image14 },
                  { src:image15 },
                  { src:image16 },
                ]}>

                </Lightbox>
             
                <div className='grid gap-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                <button onClick={() => setOpen(true)}><img className='hover:scale-110 h-72 w-full' src={image1} alt="" /></button>
                    
                     <button onClick={() => setOpen(true)}><img className='hover:scale-110 h-72 w-full' src={image2} alt="" /></button>
                     <button onClick={() => setOpen(true)}><img className='hover:scale-110 h-72 w-full' src={image3} alt="" /></button>
                     <button onClick={() => setOpen(true)}><img className='hover:scale-110 h-72 w-full' src={image4} alt="" /></button>
                     <button onClick={() => setOpen(true)}><img className='hover:scale-110 h-72 w-full' src={image5} alt="" /></button>
                     <button onClick={() => setOpen(true)}><img className='hover:scale-110 h-72 w-full' src={image6} alt="" /></button>
                     <button onClick={() => setOpen(true)}><img className='hover:scale-110 h-72 w-full' src={image7} alt="" /></button>
                     <button onClick={() => setOpen(true)}><img className='hover:scale-110 h-72 w-full' src={image8} alt="" /></button>
                     <button onClick={() => setOpen(true)}><img className='hover:scale-110 h-72 w-full' src={image9} alt="" /></button>
                     <button onClick={() => setOpen(true)}><img className='hover:scale-110 h-72 w-full' src={image10} alt="" /></button>
                     <button onClick={() => setOpen(true)}><img className='hover:scale-110 h-72 w-full' src={image11} alt="" /></button>
                     <button onClick={() => setOpen(true)}><img className='hover:scale-110 h-72 w-full' src={image12} alt="" /></button>
                     <button onClick={() => setOpen(true)}><img className='hover:scale-110 h-72 w-full' src={image13} alt="" /></button>
                     <button onClick={() => setOpen(true)}><img className='hover:scale-110 h-72 w-full' src={image14} alt="" /></button>
                     <button onClick={() => setOpen(true)}><img className='hover:scale-110 h-72 w-full' src={image15} alt="" /></button>
                     <button onClick={() => setOpen(true)}><img className='hover:scale-110 h-72 w-full' src={image16} alt="" /></button>
                </div>
               
            </div>
        </div>
    );
};

export default Gallary;