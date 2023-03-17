import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
// import { Lifestyle } from "./DietPlanner"
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import {Link} from 'react-router-dom'
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
// import DetectPCOS from "../components/DetectPCOS"

export const Projects = () => {

  // const router = createBrowserRouter([
  //   {
  //     path:"/detectPCOS",
  //     element:<DetectPCOS />
  //   }
  // ])

  const projects = [
    {
      title: "Learning Entrepreneurial Skills",
      description: "Get a hold of various entrepreneurial skills",
      imgUrl: projImg1,
      href:'/learn',
    },
    {
      title: "Grow Your Business",
      description: "Grow your Business by using Udyogini's business model",
      imgUrl: projImg2,
      href:'/supplier',
      
    },
    {
      title: "Have a look at Entrepreneurs list",
      description: "",
      imgUrl: projImg3,
      href:'',
    }
  ];
  const projects_1= [
    {
      title: "Connect with other women Enterpreneurs",
      description: "-----------------",
      imgUrl: projImg1,
      href:"/community"
    },
    // {
    //   title: "Diet Planner",
    //   description: "-----------------",
    //   imgUrl: projImg2,
    // },
    // {
    //   title: "Period Tracker",
    //   description: "-----------------",
    //   imgUrl: projImg3,
    // }
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={4}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Udyogini's Journey Begins Here</h2>
                <p>NITI Aayog has launched a Women Entrepreneurship Platform (WEP) for providing an ecosystem for budding & existing women entrepreneurs across the country. SIDBI has partnered with NITI Aayog to assist in this initiative.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first" >Prarambh</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                      <Nav.Link eventKey="second">Lifestyle Suggestion</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Gyno Consultation</Nav.Link>
                    </Nav.Item> */}
                  </Nav>
                  
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}></Tab.Content>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects_1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                // onClick={Lifestyle} 
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Ladies, you must keep a check on your health and follow regular health checkups with a gynecologist. You can consult a gynecologist online by downloading the lybrate app or visiting the website. Stay rest assured about your health as our gynaecologists are quite experienced and treat every patient with patience and care. We have a very strict verification process for every doctor on lybrate. Hence, any gynaecologist that you consult with is a verified medical expert to maintain high standards on online consultation.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>

                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first" >Community</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                      <Nav.Link eventKey="second">Lifestyle Suggestion</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Gyno Consultation</Nav.Link>
                    </Nav.Item> */}
                  </Nav>
                  
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    {/* <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane> */}
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}></Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects_1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                // onClick={Lifestyle} 
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Ladies, you must keep a check on your health and follow regular health checkups with a gynecologist. You can consult a gynecologist online by downloading the lybrate app or visiting the website. Stay rest assured about your health as our gynaecologists are quite experienced and treat every patient with patience and care. We have a very strict verification process for every doctor on lybrate. Hence, any gynaecologist that you consult with is a verified medical expert to maintain high standards on online consultation.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}