
import './App.css'
import Banner from './components/Banner'
import DownloadSection from './components/DownloadSection'
import MainFeatureLayout from './components/Features/MainFeatureLayout'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Register from './components/Register'
import MainContainer from './components/SecendPart.jsx/MainContainer'

function App() {


  return (
    <>
     
      <NavBar></NavBar>
      <Banner></Banner>
      <MainContainer></MainContainer>
      <MainFeatureLayout></MainFeatureLayout>
      <DownloadSection></DownloadSection>
      <Register></Register>
      <Footer></Footer>
    </>
  )
}

export default App
