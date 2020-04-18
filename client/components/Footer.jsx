import React from 'react'
import { Row, Col, Container, Image } from 'react-bootstrap'

class Footer extends React.Component {
    state = {

    }

    render () {
      return (
        <>
          <Container style={{ paddingBottom: 20, backgroundColor: '#00428F' }} fluid>

            <Row style={{ textAlign: 'center', height: '5rem', paddingTop: 20, color: 'white' }}>
              <Col><h4>Local businesses using Peer Posties</h4></Col>
            </Row>

            <Row style={{ textAlign: 'center' }}>
              <Col><Image src='/images/coming-soon.jpg' fluid style={{ maxWidth: '50%' }}/></Col>
              <Col><Image src='/images/coming-soon.jpg' fluid style={{ maxWidth: '50%' }}/></Col>
              <Col><Image src='/images/coming-soon.jpg' fluid style={{ maxWidth: '50%' }}/></Col>
              <Col><Image src='/images/coming-soon.jpg' fluid style={{ maxWidth: '50%' }}/></Col>
              <Col><Image src='/images/coming-soon.jpg' fluid style={{ maxWidth: '50%' }}/></Col>

            </Row>

          </Container>
        </>
      )
    }
}

export default Footer
