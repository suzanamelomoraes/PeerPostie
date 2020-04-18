import React from 'react'
import { Row, Col, Container, Image } from 'react-bootstrap'

const HowItWorks = () => {
  return (
    <div style={{ paddingTop: 20 }} className="text-white">
      <Container style={{ paddingBottom: 20 }} fluid>

        <Row style={{ textAlign: 'center', height: '5rem' }}>
          <Col><h1>How it works</h1></Col>
        </Row>

        <Row style={{ paddingBottom: 20, textAlign: 'center' }}>
          <Col><Image src='/images/phone.png' fluid style={{ maxWidth: '25%' }}/></Col>
          <Col><Image src='flowers.png' fluid style={{ maxWidth: '30%' }}/></Col>
          <Col style={{ paddingTop: '4%' }}><Image src='car-guy-phone.png' fluid style={{ maxWidth: '45%' }}/></Col>
          <Col><Image src='/images/door-flowers.png' fluid style={{ maxWidth: '35%' }}/></Col>
        </Row>

        <Row style={{ textAlign: 'center' }}>
          <Col><h4>Request a PeerPostie</h4></Col>
          <Col><h4>Select delivery style</h4></Col>
          <Col><h4>Item Transported</h4></Col>
          <Col><h4>Item delivered</h4></Col>
        </Row>

        <Row style={{ textAlign: 'center', height: '5rem', color: '#D9FF00', textDecoration: 'underline', paddingTop: 30 }}>
          <Col><h3>Watch Video</h3></Col>
        </Row>

      </Container>
    </div>
  )
}

export default HowItWorks
