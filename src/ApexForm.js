import React, { Component } from 'react';
import { Container, Col, Row, Jumbotron, Form, Button } from 'react-bootstrap';
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

  BRPage = () => {
    return (
      <BattleRoyaleForm />
    );
  }

  TPPage = () => {
    return (
      <ThirdPersonForm />
    );
  }

  render() {
    let mainComponent = (
      <Container>
        <Row>
          <Col md={{ span: 7, offset: 3 }}>
            <Jumbotron>
              <img width={100} src={logo} alt="zenva" />
              <h1>New Apex Legend Review Form</h1>
              <p>
                How has Apex Legends main Battle Royale Mode been? Do you like it? Should it be changed? Should we include different modes other than First Person?
              </p>
              <Form>
                <Form.Group>
                  <h2>User Information</h2>
                  <Form.Label>Name</Form.Label>
                  <Form.Row>
                    <Col>
                      <Form.Control placeholder="First Name" />
                    </Col>
                    <Col>
                      <Form.Control placeholder="Last Name" />
                    </Col>
                  </Form.Row>
                </Form.Group>

                <Form.Row>
                  <Form.Group as={Col} controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="telephone" placeholder="Enter Phone" />
                  </Form.Group>
                </Form.Row>

                <Form.Group controlId="formAddress">
                  <Form.Label>Address</Form.Label>
                  <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Row>
                  <Form.Group as={Col} controlId="formCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formState">
                    <Form.Label>State</Form.Label>
                    <Form.Control as="select">
                      <option>-Choose-</option>
                      <option>...</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formZip">
                    <Form.Label>Zipcode</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Form.Row>

                <h2>Game Mode</h2>
                <Container>
                  <Row>
                    <Col>
                      <Button variant="primary" type="submit" size="lg" onClick={this.enableBRPage}>Battle Royale</Button>
                    </Col>
                    <Col>
                      <Button variant="primary" type="submit" size="lg" onClick={this.enableTPPage}>Third Person</Button>
                    </Col>
                  </Row>
                </Container>

              </Form>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );

    return (
      <div>
        { this.state.isMainPage ? mainComponent : null}
        { this.state.isBattleRoyalePage ? this.BRPage() : null}
        { this.state.isThirdPersonPage ? this.TPPage() : null}
      </div>
    );
  }
}

export default ApexForm;