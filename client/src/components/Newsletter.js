import doctor from "../assets/img/Doctor.jpg"
import { Col, Row } from "react-bootstrap";

import image1 from '../assets/img/Upasana Taku.png';
import image2 from '../assets/img/Aditi Gupta.png'
import image3 from '../assets/img/Divya Gokulnath.png'
import home from "../assets/Home.png"

export const Newsletter = ({ status }) => {
  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
            {/* <img src={home} alt="" className="newsletter-icon"/> */}
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>Udyogini's <br /> Women Enterpreneur</h3>
            <br></br>
            <h6>PCOS Management is more than just a number on a scale. Sakhi works with leading experts in the industry who care as much about your
              path to PCOS reversal as you do.</h6>
            <br /><br />
            <h6>PCOS Management is more than just a number on a scale. Sakhi works with leading experts in the industry who care as much about your
              path to PCOS reversal as you do.</h6>
          </Col>
          <Col md={6} xl={7}>
            <div className="new-doc-bx">
              <img src={image1} alt="" />
              <img src={image2} alt="" />
              <img src={image3} alt="" />
              <img src={image1} alt="" />
              <img src={image2} alt="" />
              <img src={image3} alt="" />
              {/* <img src={doctor} alt="Sakhi Doctor Img" />
              <img src={doctor} alt="Sakhi Doctor Img" /> */}
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  )
}