import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GreenPage from './GreenPage';
import BluePage from './BluePage';

function MenuBar() {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      background: '#222',
      color: 'white',
      zIndex: 1000,
      padding: '0.5rem 0',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', gap: '2rem', justifyContent: 'center', alignItems: 'center' }}>
        <li><Link style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }} to="/">Home</Link></li>
        <li><Link style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }} to="/green">Green Page</Link></li>
        <li><Link style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }} to="/blue">Blue Page</Link></li>
      </ul>
    </nav>
  );
}

function Home() {
  return (
    <div className="App">
      <header className="App-header" style={{ paddingTop: '4rem' }}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload!
        </p>
      </header>
    </div>
  );
}

function App() {
  return (
    <Router>
      <MenuBar />
      <div style={{ paddingTop: '4rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/green" element={<GreenPage />} />
          <Route path="/blue" element={<BluePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
