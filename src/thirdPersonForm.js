import React from 'react';
import { Col, Form, Button } from 'react-bootstrap';

const ThirdPersonForm = ({ formData, setUsername, setDate, setSex, setRace, handleSubmit }) => {
  const { username, date, sex, race } = formData;
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <h2>Third Person Submission</h2>
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="input"
          value={username} placeholder="Username"
          onChange={setUsername}
        />
      </Form.Group>

      <Form.Group controlId="formBirth">
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" value={date} onChange={setDate} />
      </Form.Group>

      <Form.Row>
        <Form.Group as={Col} controlId="formSex">
          <Form.Label>Sex</Form.Label>
          <Form.Control
            as="select"
            value={sex}
            onChange={setSex}
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
            onChange={setRace}
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
          <Form.Label>Enjoy this mode over Battle Royale Mode?</Form.Label>
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
        <Form.Label>Comment and Concerns About Third Person Mode</Form.Label>
        <Form.Control as="textarea" rows="3" />
      </Form.Group>

      <Button variant="primary" type="submit">Submit</Button>

    </Form>
  );
};

export default ThirdPersonForm;