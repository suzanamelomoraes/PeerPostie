import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from "react-places-autocomplete";

export default function FormFields() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group as={Row} controlId="exampleForm.ControlSelect1">
          <Form.Label column="lg" lg={2}>
            Pick Up Style
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              required
              placeholder="Select..."
              size="lg"
              as="select"
            >
              <option>Person</option>
              <option>Vehicle</option>
            </Form.Control>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="exampleForm.ControlTextarea1">
          <Form.Label column="lg" lg={2}>
            From
          </Form.Label>
          <Col sm={10}>
            <Form.Control required size="lg" as="textarea" rows="1" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="exampleForm.ControlTextarea1">
          <Form.Label column="lg" lg={2}>
            To
          </Form.Label>
          <Col sm={10}>
            <Form.Control required size="lg" as="textarea" rows="1" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="exampleForm.ControlSelect2">
          <Form.Label column="lg" lg={2}>
            When
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              required
              size="lg"
              as="select"
              type="text"
              placeholder="Select..."
            >
              <option>ASAP</option>
              <option>Today</option>
            </Form.Control>
          </Col>
        </Form.Group>
        <Form.Group></Form.Group>
        <Button type="submit" feedback="Please complete all fields.">
          Calculate
        </Button>
        <Button type="submit">Book Now</Button>
      </Form>
    </div>
  );
}
