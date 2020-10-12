import React, { Component } from 'react';
import { Container, Col, Row, Jumbotron } from 'react-bootstrap';
import BattleRoyaleForm from './BattleRoyaleForm';
import ThirdPersonForm from './ThirdPersonForm';
import logo from './zenva-academy.png';

class ApexForm extends Component {
  constructor() {
    super();
    this.state = {
      isBattleRoyalePage: false,
      isThirdPersonPage: false,
      isMainPage: true,
    };

    this.enableBRPage = this.enableBRPage.bind(this);
    this.enableTPPage = this.enableTPPage.bind(this);
  }

  enableBRPage = () => {
    this.setState({
      isBattleRoyalePage: true,
      isMainPage: false,
    });
  }

  enableTPPage = () => {
    this.setState({
      isThidPersonPage: true,
      isMainPage: false,
    });
  }

  render() {
    let mainComponent = (
      <Container>
        <Row>
          <Col md={{ span: 7, offset: 3 }}>
            <Jumotron>
              <img width={100} src={logo} alt="zenva" />
              <h1>New Apex Legend Review Form</h1>
              <p>
                How has Apex Legends main Battle Royale Mode been? Do you like it? Should it be changed? Should we include different modes other than First Person?
              </p>
            </Jumotron>
          </Col>
        </Row>
      </Container>
    );

    return (
    );
  }
}

export default ApexForm;