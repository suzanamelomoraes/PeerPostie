import React from 'react'
import { Grid, Row, Col, Button ,Container} from "react-bootstrap";

const HowItWorks = () => {
  return (
    <Container>
      <Row style={{textAlign: "center"}}>
       <Col>How it works</Col>
     </Row>
     <Row>
     <Col>Request a PeerPostie</Col>
     <Col xs={5}>Select your delivery style</Col>
     <Col>Item delivered</Col>
    </Row>
    <Row>
      <Col><image src='/images/-peer-postie-icon.png'></image>Request a PeerPostie</Col>
      <Col xs={5}><image src='/images/-bike-.png'></image></Col>
      <Col><image src='/images/door-flowers.png'></image></Col>
    </Row>
  </Container>
  )
}

export default HowItWorks
