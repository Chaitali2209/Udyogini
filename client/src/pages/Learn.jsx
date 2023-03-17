import React from 'react';
import './Learn.css';

const Learn = () => {
  return (
    <div className="Learn">

      <div className="Learning-container">
        <h1 className="Learning-heading">Learning Page</h1>
        <p className="Learning-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          condimentum commodo felis, ut consectetur ipsum commodo vitae. In hac
          habitasse platea dictumst. Vivamus ut mauris vel tellus consectetur
          pretium sit amet vitae nunc. Sed eget eros ut lacus congue venenatis sed
          ac lectus. Morbi auctor tortor sed augue malesuada, nec bibendum sapien
          sagittis. Ut in risus bibendum, bibendum mauris ac, fringilla libero.
          Sed et quam nec nibh hendrerit malesuada.
        </p>

        <div className='main'>
          <div className='vission'>
            <h2 className='heading'>Vission</h2>
            <p className="vission-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              condimentum commodo felis, ut consectetur ipsum commodo vitae. In hac
              habitasse platea dictumst. Vivamus ut mauris vel tellus consectetur
              pretium sit amet vitae nunc. Sed eget eros ut lacus congue venenatis sed
              ac lectus. Morbi auctor tortor sed augue malesuada, nec bibendum sapien
              sagittis. Ut in risus bibendum, bibendum mauris ac, fringilla libero.
              Sed et quam nec nibh hendrerit malesuada.
            </p>
          </div>
          <div className="mission">
            <h2 className="heading">Mission</h2>
            <p className="mission-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              condimentum commodo felis, ut consectetur ipsum commodo vitae. In hac
              habitasse platea dictumst. Vivamus ut mauris vel tellus consectetur
              pretium sit amet vitae nunc. Sed eget eros ut lacus congue venenatis sed
              ac lectus. Morbi auctor tortor sed augue malesuada, nec bibendum sapien
              sagittis. Ut in risus bibendum, bibendum mauris ac, fringilla libero.
              Sed et quam nec nibh hendrerit malesuada.
            </p>
          </div>
        </div>

        <div className="main-video">
          <h2 className="heading">Our Video</h2>
          <div className="videos">
            <div className="video-1">
              <iframe className="our-video" src="https://www.youtube.com/embed/2-crBg6wpp0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div> 
            <div className="video-2">
              <iframe className="our-video" src="https://www.youtube.com/embed/2-crBg6wpp0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>
        </div>

        {/* <div className="main-photos">
          <h2 className="heading">Our Women Entrepreneur</h2>
          <div className="w-photos">
            <img src={image1} alt=""/>
            <img src={image2} alt=""/>
            <img src={image3} alt=""/>
          </div>
        </div> */}
      </div>

    </div>
  )
}

export default Learn