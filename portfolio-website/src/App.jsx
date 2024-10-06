import './App.css'
import './index.css'
import { Home } from './components/Home/Home'
import { Navbar } from './components/Navbar'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import ParticlesBackground from './components/Particles'
import { Footer } from './components/Footer'
import { Projects } from './components/Projects/Projects'
function App() {

  return (
    <Router>
        <ParticlesBackground />

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/projects" element={<Projects />} />
         {/* <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} /> */}
        </Routes>
        <Footer/>
    </Router>
  )
}

export default App
