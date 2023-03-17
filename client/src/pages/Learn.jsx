import React from 'react';
import './Learn.css';
import learn from '../assets/img/Learn.png';
import Video from '../components/Video';
import { Footer } from '../components/Footer';
import { NavBar } from '../components/NavBar';
import { Newsletter } from '../components/Newsletter';
import { MailchimpForm } from '../components/MailchimpForm';
const Learn = () => {
  return (
    <>
    <NavBar />
    <div className="Learn">
        <img src={learn} alt="" />
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
          <div className='Vision'>
            <h2 className='heading'>Vision</h2>
            <p className="Vision-description">
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
          <h2 className="Learning-heading">Our Video</h2>
          
        </div>

        <Video />
        <MailchimpForm />

        {/* <div className="main-photos">
          <h2 className="heading">Our Women Entrepreneur</h2>
          <div className="w-photos">
          <img src={image1} alt=""/>
          <img src={image2} alt=""/>
          <img src={image3} alt=""/>
          </div>
        </div> */}
      </div> 
      {/* <Video /> */}

    </div>
        <Footer />
    </>
  )
}

export default Learn