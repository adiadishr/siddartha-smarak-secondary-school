import React from 'react'
import Topbar from './components/global/Topbar'
import Navbar from './components/global/Navbar'
import Main from './pages/Main'
import Footer from './components/global/Footer'
import Popup from './components/global/Popup'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const App = () => {

  return (
    <>
      <Popup />
      <Topbar />
      <Navbar />
      <Main />
      <Footer />
    </>
  )
}

export default App