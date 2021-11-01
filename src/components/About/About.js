import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className='about-container'>
      <div>
        <img  height='600px' className='m-5' src="https://preview.colorlib.com/theme/hepta/images/ximg_1_long.jpg.pagespeed.ic.pznlLr5j3M.webp" />
      </div>
      <div className='about-content'>
        <h1>Welcome To Our Website</h1>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean. A small river named Duden flows by their place and
          supplies it with the necessary regelialia.
        </p>
      </div>
    </div>
  );
};

export default About;