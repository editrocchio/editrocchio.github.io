import React, { Component } from 'react';
import profile from '../bcit-nov28-2316.png'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

class About extends Component {
  render() {
    return (
        <Container className="aboutWrapper">
          <Row>
            <Col>
                <h1>About Me</h1>
                <hr />
                <div className='contactIconContainer'>
                  <Image src={profile} alt="profile_pic" className='myPic' fluid rounded/>
                  <div className="icons">
                    <a href="https://github.com/editrocchio" rel="noopener noreferrer" target="_blank"><i class="fab fa-github fa-2x" ></i></a>
                    <a href="https://ca.linkedin.com/in/editrocchio" rel="noopener noreferrer" target="_blank"><i class="fab fa-linkedin fa-2x" ></i></a>
                    <a href="https://www.facebook.com/ditrocchio" rel="noopener noreferrer" target="_blank"><i class="fab fa-facebook-square fa-2x"></i></a>
                    <a href="mailto: editrocchio@gmail.com" rel="noopener noreferrer" target="_blank"><i class="fas fa-envelope-open-text fa-2x" ></i></a>
                  </div>
                </div>
                <div className='aboutText'>
                  <h4>
                  I'm a second year student in the Computer Systems Technology program at British Columbia Institute of Technology. I'm currently working as an Agile Developer Intern at SAP.
                  <br/><br/>
                  I started my career with an undergraduate degree in Psychology from SFU. After working in the post secondary system for a number of years, I decided to teach myself how to code
                  and quit my job to pursue the field full time. I love building software and have worked with a number of different frameworks and tools. I've built websites, mobile applications,
                  and business automation software. If you're interested, you can have a look at my portfolio below. Feel free to contact me if you want something built or to collaborate on a
                  project.
                  </h4>
                </div>
            </Col>
          </Row>
        </Container>
    )
  }
}

export default (About);
