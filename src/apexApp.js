import React, { Component } from 'react';
import { Container, Col, Row, Jumbotron, Form, Button } from 'react-bootstrap';
import logo from './zenva-academy.png';

class ApexForm extends Component {
  state = {
    username: '',
  };

  render() {
    const { username } = this.state;

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


              </Form>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ApexForm;