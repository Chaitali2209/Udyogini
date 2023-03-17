import { Col } from "react-bootstrap";
import { Router } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
export const ProjectCard = ({ title, description, imgUrl,href }) => {

  

  // const navigate = useNavigate()

  // const PCOSForm = () =>{
    
    
  //     navigate('/DetectPCOS')
    
  // }
  return (
    
    <Col size={2} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="img"/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br />
          <span><a href={href}>Click here</a></span>
          {/* BrowserRouter */}
          {/* <button >Click Here</button> */}
        </div>
      </div>
    </Col>
  )
}