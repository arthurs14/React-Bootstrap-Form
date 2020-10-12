import React, { Component } from 'react';
import { Container, Col, Row, Jumbotron } from 'react-bootstrap';
import BattleRoyaleForm from './BattleRoyaleForm';
import logo from './zenva-academy.png';

class ApexForm extends Component {
  state = {
    username: '',
    date: '',
    sex: '',
    race: '',
  };

  setUsername = (ev) => {
    this.setState({
      username: ev.target.value,
    });
  }

  setDate = (ev) => {
    this.setState({
      date: ev.target.value,
    });
  }

  setSex = (ev) => {
    this.setState({
      sex: ev.target.value,
    });
  }

  setRace = (ev) => {
    this.setState({
      race: ev.target.value,
    });
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { username, date } = this.state;

    alert(`Response Submitted for ${username} on ${date}`);
  }

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

              <BattleRoyaleForm
                formData={this.state}
                setUsername={this.setUsername}
                setDate={this.setDate}
                setSex={this.setSex}
                setRace={this.setRace}
                handleSubmit={this.handleSubmit}
              />
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ApexForm;