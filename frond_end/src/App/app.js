import React from 'react'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col items-center">
      <Header title="Header Section" />
      <Home title="Home Section" />
      <Footer title="Footer Section" />
    </div>
  )
}
