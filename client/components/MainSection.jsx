import React from 'react'
import { Image, Container } from 'react-bootstrap'
import HowItWorks from './HowItWorks'
import FormFields from './FormFields'
import MainFooter from "./MainFooter";

class MainSection extends React.Component {
    state = {

    }

    render () {
      return (
        <>
          <Container fluid style={{ padding: 0, margin: 0, height: 100 }}>

            <Image src="map-dark.jpg" fluid style={{ width: '100%', height: '900%' }} />

            <Container style={{
              position: 'absolute',
              top: '20%',
              left: '20%'
            }}>
              <h1 style={{ color: 'white', fontSize: '5em' }}>Your local</h1>
              <h1 style={{ color: 'white', fontSize: '5em' }}>on-demand</h1>
              <h1 style={{ color: 'white', fontSize: '5em' }}>courier</h1>

              <h4 style={{ color: 'white' }}>Where we Operate:</h4>
              <ul style={{ listStyleType: 'none' }}>
                <li style={{ color: '#D9FF00', textDecoration: 'underline' }}><h3>Auckland</h3></li>
                <li style={{ color: '#D9FF00', textDecoration: 'underline' }}><h3>Wellington</h3></li>
                <li style={{ color: '#D9FF00', textDecoration: 'underline' }}><h3>Christchurch</h3></li>
                <li style={{ color: '#D9FF00', textDecoration: 'underline' }}><h3>Queenstown</h3></li>
              </ul>
            </Container>

            <Container style={{
              position: 'absolute',
              top: '15%',
              left: '60%',
              backgroundColor: 'white',
              width: 450
            }}>
              <FormFields />
            </Container>

            <Container fluid style={{ padding: 0, margin: 0, height: '100%', backgroundColor: '#00428F' }}>
            </Container>

            <HowItWorks/>

            <MainFooter />

          </Container>
        </>
      )
    }
}

export default MainSection
