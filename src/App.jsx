import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Discography from './components/Discography'
import Events from './components/Events'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      <Hero />
      <Discography />
      <Events />
      <Contact />
    </div>
  )
}

export default App
