import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';



const items = [
    <div className="item" data-value="1" >
        <img src="https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/0/10_12.jpg" alt="saree"  className=' w-full h-full '/>
    </div>,
    <div className="item" data-value="2">
        <img src="https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/9/_/9_13.jpg" alt="saree 2 " className=' w-full h-full ' />
    </div>,
    <div className="item" data-value="3">
        <img src="https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/2/12_10.jpg" alt="saree 3 " className=' w-full h-full ' />
    </div>
    
];

const HomeCarousel = () => (
    <AliceCarousel
        // mouseTracking
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
       
        controlsStrategy="alternate"
    />
);
export default HomeCarousel ;