import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import PhysicsDept from './pages/PhysicsDept'
import LabResearch from './pages/LabResearch'
import MoreInfo from './pages/MoreInfo'
import Syllabi from './pages/Syllabi'
import ResearchPapers from './pages/ResearchPapers'
import Interviews from './pages/Interviews'
import Equipment from './pages/Equipment'
import Lectures from './pages/Lectures'
import Patents from './pages/Patents'
import Maps from './pages/Maps'
import Abstracts from './pages/Abstracts'
import Photos from './pages/Photos'
import Posters from './pages/Posters'
import Asteroid from './pages/Asteroid'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="app-container">
      {/* 1. Header Section */}
      <header className="app-header">
        <h1>Opeil Laboratory - Higgins Hall 130</h1>
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/physics-dept">BC Physics</Link>
          <Link to="/lab-research">Research</Link>
          <Link to="/more-info">More Info</Link>
        </nav>
      </header>

      {/* 2. Main Content Area */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/physics-dept" element={<PhysicsDept />} />
          <Route path="/lab-research" element={<LabResearch />} />
          <Route path="/more-info" element={<MoreInfo />} />
          <Route path="/syllabi" element={<Syllabi />} />
          <Route path="/research-papers" element={<ResearchPapers />} />
          <Route path="/interviews" element={<Interviews />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/lectures" element={<Lectures />} />
          <Route path="/patents" element={<Patents />} />
          <Route path="/maps" element={<Maps />} />
          <Route path="/abstracts" element={<Abstracts />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/posters" element={<Posters />} />
          <Route path="/asteroid" element={<Asteroid />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  )
}

export default App