import React from 'react';
import PropTypes from 'prop-types';
import About from './aboutme.js'
import CenteredTabs from './projecttabs.js'
import java from '../languages/java.png'
import js from '../languages/js.png'
import py from '../languages/python.png'
import android from '../frameworks/android.png'
import firebase from '../frameworks/firebase.png'
import git from '../frameworks/git.png'
import oracle from '../frameworks/oracle.png'
import react from '../frameworks/react.png'
import css from '../web/css.png'
import html from '../web/html.png'
import jquery from '../web/jquery.png'
import rest from '../web/rest.png'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';



class LandingPage extends React.Component {
    render() {
        return (
          <div className="root">
            <div class="initial">
              <Container>
                <Row>
                  <Col>
                    <div className="landingText">
                      <h1>{'{'} Emilio Ditrocchio {'}'}</h1>
                      <h2>BCIT Computer Systems Technology Student</h2>
                        <h4>Agile Developer Intern - SAP</h4>
                    </div>
                  </Col>
                </Row>
            </Container>
          </div>
              <About/>
              <Container>
                  <CenteredTabs/>
              </Container>

          </div>
        );
    }
}

export default (LandingPage);
