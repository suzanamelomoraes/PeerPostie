import React from 'react'
import { Row, Col, Container, Image } from 'react-bootstrap'

const HowItWorks = () => {
  return (
    <div style={{ paddingTop: 20 }} className="text-white">
      <Container style={{ paddingBottom: 20 }}>

        <Row style={{ textAlign: 'center', height: '10rem' }}>
          <Col><h3>How it works</h3></Col>
        </Row>

        <Row style={{ paddingBottom: 20 }}>
          <Col style={{ textAlign: 'center' }}><Image src='/images/phone.png' rounded width={100} height={160}/></Col>
          <Col style={{ textAlign: 'center' }}><Image src='flowers.png' rounded width={171} height={160}/></Col>
          <Col style={{ textAlign: 'center' }}><Image src='car-guy-phone.png' rounded width={171} height={160}/></Col>
          <Col style={{ textAlign: 'center' }}><Image src='/images/door-flowers.png' rounded width={171} height={160}/></Col>
        </Row>

        <Row>
          <Col><h4>Request a PeerPostie</h4></Col>
          <Col><h4>Select delivery style</h4></Col>
          <Col><h4>Item Transported</h4></Col>
          <Col><h4>Item delivered</h4></Col>
        </Row>

      </Container>
    </div>
  )
}

export default HowItWorks
