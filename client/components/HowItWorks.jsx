import React from 'react'
import { Grid, Row, Col, Button ,Container, Image} from "react-bootstrap";

const HowItWorks = () => {
  return (
    <div style={{ paddingTop: 150}} class="text-white">
    <Container >
      <Row style={{textAlign: "center", height: '10rem'}}>
       <Col><h3>How it works</h3></Col>
     </Row>
    <Row>
      <Col><Image src='/images/phone.png' rounded width={100} height={160}/><Image src='/images/peer-postie-icon.png' rounded width={171} height={160}/></Col>
      <Col xs={5}><Image src='/images/car.png' rounded width={140} height={160}/><Image src='/images/bike.png' rounded width={171} height={160}/></Col>
      <Col><Image src='/images/door-flowers.png' rounded width={171} height={160}/></Col>
    </Row>
    <Row>
     <Col><h4>Request a PeerPostie</h4></Col>
     <Col xs={5}><h4>Select your delivery style</h4></Col>
     <Col><h4>Item delivered</h4></Col>
    </Row>
  </Container>
  </div>
  )
}

export default HowItWorks
