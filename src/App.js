import React, { Component } from 'react'
import styled from 'styled-components'
import image from './img/whimsee-cover.png'

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Splash = styled.img`
  max-width: 600px;
`

const Text = styled.h1`
  font-weight: normal; 
`

class App extends Component {
  render() {
    return (
      <Container>
        <Splash src={image} alt="cover" />
        <Text>Website coming soon!</Text>
      </Container>
    )
  }
}

export default App
