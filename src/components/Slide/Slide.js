import React from "react";
import "./Slide.css";
import {Carousel} from 'react-bootstrap'

const Slide = () => {
  return (
    <div>
      <div className='mt-5 content'>
        <h1 >
          International Tour <br /> Management.
        </h1>
        <p className='mt-5'>
          Far far away, behind the word mountains, far from the countries <br/>
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
        </p>
      </div>
      <Carousel className='carosel'>
        <Carousel.Item>
          <img
            className="d-block "
            src="https://preview.colorlib.com/theme/hepta/images/xslider-5.jpg.pagespeed.ic.LuSe7ifv_m.webp"
            alt="First slide"
          />
         
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block "
            src="https://preview.colorlib.com/theme/hepta/images/xslider-6.jpg.pagespeed.ic.Qq2mWFtFcd.webp"
            alt="Second slide"
          />

          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block "
            src="https://preview.colorlib.com/theme/hepta/images/xslider-1.jpg.pagespeed.ic.qxNzCJBtRF.webp"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slide;
