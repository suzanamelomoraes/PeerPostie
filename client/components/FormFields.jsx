import React, { Component } from "react";
import { Form, Row, Col } from "react-bootstrap";
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';


export default class FormFields extends Component {
  render() {
    return (
      <div>
        <Form>
          <Form.Group as={Row} controlId="exampleForm.ControlSelect1">
            <Form.Label column sm={2} >Pick Up Style</Form.Label>
            <Col sm={10}>
            <Form.Control placeholder="Select..." size="lg"  as="select" >
              <option>Person</option>
              <option>Vehicle</option>
            </Form.Control>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="exampleForm.ControlTextarea1">
            <Form.Label column sm={2}>From</Form.Label>
            <Col sm={10}>
            <Form.Control size="lg" as="textarea" rows="1" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="exampleForm.ControlTextarea1">
            <Form.Label column sm={2}>To</Form.Label>
            <Col sm={10}>
            <Form.Control size="lg" as="textarea" rows="1" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="exampleForm.ControlSelect2">
            <Form.Label column sm={2}>When</Form.Label>
            <Col sm={10}>
            <Form.Control size="lg" as="select" type="text" placeholder="Select..." >
              <option>ASAP</option>
              <option>Today</option>
            </Form.Control>
            </Col>
          </Form.Group>
        </Form>
      </div>
    );
  }
}
