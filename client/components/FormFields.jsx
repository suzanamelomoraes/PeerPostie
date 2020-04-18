import React, { Component } from "react";
import { Form } from "react-bootstrap";
import PlacesAutocomplete from 'react-places-autocomplete'


export default class FormFields extends Component {
  render() {
    return (
      <div>
        <Form>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Pick Up Style</Form.Label>
            <Form.Control as="select">
              <option>Person</option>
              <option>Vehicle</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>From</Form.Label>
            <Form.Control as="textarea" rows="1" />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea2">
            <Form.Label>To</Form.Label>
            <Form.Control as="textarea" rows="1"  />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label>When</Form.Label>
            <Form.Control as="select">
              <option>ASAP</option>
              <option>Today</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </div>
    );
  }
}
