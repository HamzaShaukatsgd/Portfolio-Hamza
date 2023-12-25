import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import eccommerce1 from "../../Assets/eccommerce.png"
import realestate from "../../Assets/hamzalogoo11.png"
import calculator from "../../Assets/calculator.png"
import global from "../../Assets/Global.png"
import hospital from "../../Assets/Hospital.png"
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hospital}
              isBlog={false}
              title="Hospital Management System"
              description="Hospital Management details"
              ghLink="https://github.com/HamzaShaukatsgd/Kalsoom-Int-Hospital"
              demoLink=" https://hamzashaukatsgd.github.io/Kalsoom-Int-Hospital/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={realestate}
              isBlog={false}
              title="Real Estate "
              description="Real Estate"
              ghLink="https://github.com/HamzaShaukatsgd/Real-Estate"
              demoLink="https://hamzashaukatsgd.github.io/Real-Estate/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eccommerce1}
              isBlog={false}
              title="Ecomerace Website"
              description="Ecomerace website"
              ghLink="https://github.com/HamzaShaukatsgd/Ecommerce-Shopping"
              demoLink=" https://hamzashaukatsgd.github.io/Ecommerce-Shopping/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={global}
              isBlog={false}
              title="Global System"
              description="Global System"
              ghLink="https://github.com/HamzaShaukatsgd/Global"
              demoLink="https://global24.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculator}
              isBlog={false}
              title="Calculator"
              description="Calculator"
              ghLink=" https://github.com/HamzaShaukatsgd/Calculator"
               demoLink="https://calculator-29.netlify.app"
              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
               demoLink="https://blogs.soumya-jit.tech/"       
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
