import React from 'react'
import Image from 'next/image';
import { Slide, Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const Slider = () => {

    const zoomInProperties = {
        scale: 1, //how large image can transform
        duration: 5000, //image change duration
        transitionDuration: 300, // transition per images time
        infinity: true, //loop the transition to infinity
        prevArrow: (
            <div>
                <button>{"<"}</button>
            </div>
        ),
        nextArrow: 
        (
            <div>
                <button>{">"}</button>
            </div>
        ),
    }

    const slider = [{
        id: 1,
        description: "Slice",
        url: "/maxresdefault.jpeg",
    },
    {
        id: 2,
        description: "Slice_2",
        url: "/descarga.png",
    },
    {
        id: 3,
        description: "Slice_3",
        url: "/maxresdefault.jpeg",
    }];

    const spanStyle = {
        padding: '20px',
        background: '#efefef',
        color: '#000000'
      };
      
      const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '400px'
      };

    let index = 0;

  return (
    <div className="slide-container">
        <Zoom {...zoomInProperties}>
            {
                slider.map( (each, index) => (
                    <Image src={each.url} alt={each.description} key={index} width={1700} height={800} className='object-contain' ></Image>
                )) 
            }
        </Zoom>
    </div>
  )
}

export default Slider