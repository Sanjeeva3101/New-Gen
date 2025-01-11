import React from 'react'
import './Home.css'
import Hero from '../../components/Hero/Hero'
import Services from '../../components/Services/Services'
import Value from '../../components/Value/Value'
import Contact from '../../components/Contact/Contact'

const Home = () => {
  return (
    <div className="App">
        <Hero></Hero>
      <Services></Services>
      <Value></Value>
      <Contact></Contact>
    </div>
  )
}

export default Home
