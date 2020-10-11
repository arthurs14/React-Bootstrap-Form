import React, { Component } from 'react';
import { Container, Col, Row, Jumbotron, Form, Button } from 'react-bootstrap';
import logo from './zenva-academy.png';

class ApexForm extends Component {
  state = {
    username: '',
    birthday: '',
    sex: '',
    race: '',
  };

  render() {
    const { username, birthday, sex, race } = this.state;

    return (
      <Container>
        <Row>
          <Col med={{ span: 7, offset: 3 }}>
            <Jumbotron>
              <p>
                Welcome to Apex Legends. Fill out some information about the battle royale mode and third person mode so that we can improve the game over time!
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
                  <Form.Control type="date" value={birthday} onChange={this.setBirthday} />
                </Form.Group>

                <Form.Row>
                  <Form.Group as={Col} controlId="formSex">
                    <Form.Label>Sex</Form.Label>
                    <Form.Control
                      as="select"
                      value={sex}
                      onChange={this.setSex}
                    >
                      <option>-Sex-</option>
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

                <Form.Row>
                  <Form.Group as={Col} controlId="formPlaytime">
                    <Form.Label>Playtime</Form.Label>
                    <Form.Check
                      type="radio"
                      label="Daily"
                      name="formRadio1"
                      ids="formRadio1"
                    />
                    <Form.Check
                      type="radio"
                      label="Frequently"
                      name="formRadio1"
                      ids="formRadio1"
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formOutcome">
                    <Form.Label>Tired of Only Battle Royale Mode?</Form.Label>
                    <Form.Check
                      type="radio"
                      label="Yes"
                      name="formRadio2"
                      ids="formRadio2"
                    />
                    <Form.Check
                      type="radio"
                      label="No"
                      name="formRadio2"
                      ids="formRadio2"
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Group>
                  <Form.Label>Comment and Concerns About Battle Royale Mode</Form.Label>
                  <Form.Control as="textarea" rows="3" />
                </Form.Group>

                <Button variant="primary" type="submit">Submit</Button>

              </Form>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ApexForm;