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
import useAuthContext from '../Context/AuthContext'
import { Fade, Slide } from 'react-awesome-reveal'

// import { initLightboxJS, SlideshowLightbox } from 'lightbox.js-react'
// import { useEffect } from 'react'


const Gallary = () => {
    const [open, setOpen] = React.useState(false);
    const {user}=useAuthContext()
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
                    <Fade direction="top-left">  <h1 className="text-center text-4xl font-bold">Track Every Order in Real Time to Enhance Service Quality</h1></Fade>
                    <Fade direction="bottom-right">  <p className="my-5 text-white">Exceed customer expectations by optimizing operations, enhancing service quality, and creating unforgettable moments that keep diners returning for more.</p></Fade>

                    </div>
                </div>
            </div>
            <div>
               <Slide direction='left'> <p className='text-center font-Handlee text-blue-400 my-6 font-bold text-4xl'>Gallary</p></Slide>
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
                     <div className='relative' onClick={() => setOpen(true)}><img className=' h-72  w-full z-1' src={image1} alt="" />  <div className='absolute hover:backdrop-blur-sm mx-auto opacity-0 hover:opacity-100   w-80 hover:  h-72 hover:flex hover:justify-center hover:items-center hover:z-30 text-green-400 top-0 left-2 right-2 text-center'><div><h1>{user?.displayName}</h1><p>Professionally iterate diverse convergence with enterprise scenarios. Intrinsicly iterate functional methodologies.</p></div></div></div>
                     <div className='relative' onClick={() => setOpen(true)}><img className=' h-72  w-full z-1' src={image2} alt="" />  <div className='absolute hover:backdrop-blur-sm mx-auto opacity-0 hover:opacity-100   w-80 hover:  h-72 hover:flex hover:justify-center hover:items-center hover:z-30 text-green-400 top-0 left-2 right-2 text-center'><div><h1>{user?.displayName}</h1><p>Quickly seize premium paradigms with focused channels. Professionally exploit high-quality e-markets.</p></div></div></div>
                     <div className='relative' onClick={() => setOpen(true)}><img className=' h-72  w-full z-1' src={image3} alt="" />  <div className='absolute hover:backdrop-blur-sm mx-auto opacity-0 hover:opacity-100   w-80 hover:  h-72 hover:flex hover:justify-center hover:items-center hover:z-30 text-green-400 top-0 left-2 right-2 text-center'><div><h1>{user?.displayName}</h1><p>Interactively iterate holistic supply chains after high standards..</p></div></div></div>
                     <div className='relative' onClick={() => setOpen(true)}><img className=' h-72  w-full z-1' src={image4} alt="" />  <div className='absolute hover:backdrop-blur-sm mx-auto opacity-0 hover:opacity-100   w-80 hover:  h-72 hover:flex hover:justify-center hover:items-center hover:z-30 text-green-400 top-0 left-2 right-2 text-center'><div><h1>{user?.displayName}</h1><p>Intrinsicly deploy viral imperatives whereas technically sound interfaces. Credibly customize resource-leveling e-commerce.</p></div></div></div>
                     <div className='relative' onClick={() => setOpen(true)}><img className=' h-72  w-full z-1' src={image5} alt="" />  <div className='absolute hover:backdrop-blur-sm mx-auto opacity-0 hover:opacity-100   w-80 hover:  h-72 hover:flex hover:justify-center hover:items-center hover:z-30 text-green-400 top-0 left-2 right-2 text-center'><div><h1>{user?.displayName}</h1><p>Competently predominate cooperative technology and turnkey partnerships. Energistically revolutionize.</p></div></div></div>
                     <div className='relative' onClick={() => setOpen(true)}><img className=' h-72  w-full z-1' src={image6} alt="" />  <div className='absolute hover:backdrop-blur-sm mx-auto opacity-0 hover:opacity-100   w-80 hover:  h-72 hover:flex hover:justify-center hover:items-center hover:z-30 text-green-400 top-0 left-2 right-2 text-center'><div><h1>{user?.displayName}</h1><p>Globally myocardinate next-generation expertise rather than focused technology. Completely morph scalable customer service with.</p></div></div></div>
                     <div className='relative' onClick={() => setOpen(true)}><img className=' h-72  w-full z-1' src={image7} alt="" />  <div className='absolute hover:backdrop-blur-sm mx-auto opacity-0 hover:opacity-100   w-80 hover:  h-72 hover:flex hover:justify-center hover:items-center hover:z-30 text-green-400 top-0 left-2 right-2 text-center'><div><h1>{user?.displayName}</h1><p>Appropriately incentivize adaptive niche markets whereas quality ideas. Authoritatively matrix out-of-the-box paradigms rather than robust.</p></div></div></div>
                     <div className='relative' onClick={() => setOpen(true)}><img className=' h-72  w-full z-1' src={image8} alt="" />  <div className='absolute hover:backdrop-blur-sm mx-auto opacity-0 hover:opacity-100   w-80 hover:  h-72 hover:flex hover:justify-center hover:items-center hover:z-30 text-green-400 top-0 left-2 right-2 text-center'><div><h1>{user?.displayName}</h1><p>Continually embrace ubiquitous technologies through customer directed processes. Conveniently initiate market-driven benefits rather than.</p></div></div></div>
                     <div className='relative' onClick={() => setOpen(true)}><img className=' h-72  w-full z-1' src={image9} alt="" />  <div className='absolute hover:backdrop-blur-sm mx-auto opacity-0 hover:opacity-100   w-80 hover:  h-72 hover:flex hover:justify-center hover:items-center hover:z-30 text-green-400 top-0 left-2 right-2 text-center'><div><h1>{user?.displayName}</h1><p>Quickly seize premium paradigms with focused channels. Professionally exploit high-quality e-markets.</p></div></div></div>
                     <div className='relative' onClick={() => setOpen(true)}><img className=' h-72  w-full z-1' src={image10} alt="" /> <div className='absolute hover:backdrop-blur-sm mx-auto opacity-0 hover:opacity-100   w-80 hover:  h-72 hover:flex hover:justify-center hover:items-center hover:z-30 text-green-400 top-0 left-2 right-2 text-center'><div><h1>{user?.displayName}</h1><p>Interactively iterate holistic supply chains after high standards..</p></div></div></div>
                     <div className='relative' onClick={() => setOpen(true)}><img className=' h-72  w-full z-1' src={image11} alt="" /> <div className='absolute hover:backdrop-blur-sm mx-auto opacity-0 hover:opacity-100   w-80 hover:  h-72 hover:flex hover:justify-center hover:items-center hover:z-30 text-green-400 top-0 left-2 right-2 text-center'><div><h1>{user?.displayName}</h1><p>Competently predominate cooperative technology and turnkey partnerships. Energistically revolutionize.</p></div></div></div>
                     <div className='relative' onClick={() => setOpen(true)}><img className=' h-72  w-full z-1' src={image12} alt="" /> <div className='absolute hover:backdrop-blur-sm mx-auto opacity-0 hover:opacity-100   w-80 hover:  h-72 hover:flex hover:justify-center hover:items-center hover:z-30 text-green-400 top-0 left-2 right-2 text-center'><div><h1>{user?.displayName}</h1><p>Competently predominate cooperative technology and turnkey partnerships. Energistically revolutionize.</p></div></div></div>
                     <div className='relative' onClick={() => setOpen(true)}><img className=' h-72  w-full z-1' src={image13} alt="" /> <div className='absolute hover:backdrop-blur-sm mx-auto opacity-0 hover:opacity-100   w-80 hover:  h-72 hover:flex hover:justify-center hover:items-center hover:z-30 text-green-400 top-0 left-2 right-2 text-center'><div><h1>{user?.displayName}</h1><p>Intrinsicly deploy viral imperatives whereas technically sound interfaces. Credibly customize resource-leveling e-commerce.</p></div></div></div>
                     <div className='relative' onClick={() => setOpen(true)}><img className=' h-72  w-full z-1' src={image14} alt="" /> <div className='absolute hover:backdrop-blur-sm mx-auto opacity-0 hover:opacity-100   w-80 hover:  h-72 hover:flex hover:justify-center hover:items-center hover:z-30 text-green-400 top-0 left-2 right-2 text-center'><div><h1>{user?.displayName}</h1><p>Appropriately incentivize adaptive niche markets whereas quality ideas. Authoritatively matrix out-of-the-box paradigms rather than robust.</p></div></div></div>
                     <div className='relative' onClick={() => setOpen(true)}><img className=' h-72  w-full z-1' src={image15} alt="" /> <div className='absolute hover:backdrop-blur-sm mx-auto opacity-0 hover:opacity-100   w-80 hover:  h-72 hover:flex hover:justify-center hover:items-center hover:z-30 text-green-400 top-0 left-2 right-2 text-center'><div><h1>{user?.displayName}</h1><p>Continually embrace ubiquitous technologies through customer directed processes. Conveniently initiate market-driven benefits rather than.</p></div></div></div>
                     <div className='relative' onClick={() => setOpen(true)}><img className=' h-72  w-full z-1' src={image16} alt="" /> <div className='absolute hover:backdrop-blur-sm mx-auto opacity-0 hover:opacity-100   w-80 hover:  h-72 hover:flex hover:justify-center hover:items-center hover:z-30 text-green-400 top-0 left-2 right-2 text-center'><div><h1>{user?.displayName}</h1><p>Professionally iterate diverse convergence with enterprise scenarios. Intrinsicly iterate functional methodologies.</p></div></div></div>

            </div>
        </div>
        </div>
    );
};

export default Gallary;