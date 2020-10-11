import React, { Component } from 'react';
import { Container, Col, Row, Jumbotron, Form, Button } from 'react-bootstrap';
import logo from './zenva-academy.png';

class ApexForm extends Component {
  state = {
    username: '',
    orientation: '',
    race: '',
  };

  render() {
    const { username, orientation, race } = this.state;

    return (
      <Container>
        <Row>
          <Col med={{ span: 7, offset: 3 }}>
            <Jumbotron>
              <p>
                Welcome to Apex Legends. Fill out some information about the normal mode and third person mode so that we can improve the game over time!
              </p>

              <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                  <h2>User Information</h2>
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="input"
                    value={username} placeholder="Username"
                    onChange={this.setUsername}
                  />
                </Form.Group>

                <Form.Group controlId="formBirth">
                  <Form.Label>Birthday</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>

                <Form.Row>
                  <Form.Group as={Col} controlId="formOrientation">
                    <Form.Label>Orientation</Form.Label>
                    <Form.Control
                      as="select"
                      value={orientation}
                      onChange={this.setOrientation}
                    >
                      <option>-Orientation-</option>
                      <option>Female</option>
                      <option>Male</option>
                      <option>Other</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group as={Col} controlId="formEthnicity">
                    <Form.Label>Ethnicity</Form.Label>
                    <Form.Control
                      as="select"
                      value={race}
                      onChange={this.setRace}
                    >
                      <option>-Race-</option>
                      <option>White</option>
                      <option>Hispanic</option>
                      <option>Black or African American</option>
                      <option>American Indian or Alaska Native</option>
                      <option>Asian</option>
                      <option>Native Hawaiian or Other Pacific Islander</option>
                    </Form.Control>
                  </Form.Group>
                </Form.Row>
              </Form>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ApexForm;