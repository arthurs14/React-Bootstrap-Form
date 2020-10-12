import React, { Component } from 'react';
import { Container, Col, Row, Jumbotron } from 'react-bootstrap';
import BattleRoyaleForm from './BattleRoyaleForm';
import ThirdPersonForm from './ThirdPersonForm';
import logo from './zenva-academy.png';

class ApexForm extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col med={{ span: 7, offset: 3 }}>
            <Jumbotron>
              <img width={100} src={logo} alt="logo" />
              <p>
                Welcome to Apex Legends. Fill out some information about the battle royale mode and third person mode so that we can improve the game over time!
              </p>

              <BattleRoyaleForm />
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ApexForm;