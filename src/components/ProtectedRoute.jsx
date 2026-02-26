import { useState } from 'react';
// 1. Import the image file directly
import bcSeal from '../assets/front_page/bc_seal.png';

const ProtectedRoute = ({ children }) => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('lab-auth') === 'true'
  );

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'OpeilLab2026') { 
      localStorage.setItem('lab-auth', 'true');
      setIsAuthenticated(true);
    } else {
      alert('Incorrect Password');
    }
  };

  if (!isAuthenticated) {
    return (
      <div style={{ textAlign: 'center', marginTop: '100px', fontFamily: 'Arial, sans-serif' }}>
        {/* 2. Use the imported variable name here */}
        <img src={bcSeal} alt="BC Logo" style={{ width: '100px' }} />
        <h2>Opeil Laboratory - Higgins Hall 130</h2>
        <p>This site is restricted to lab members.</p>
        <form onSubmit={handleLogin} style={{ marginTop: '20px' }}>
          <input 
            type="password" 
            placeholder="Enter Lab Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: '12px', borderRadius: '4px', border: '1px solid #8a100b', width: '250px' }}
          />
          <br /><br />
          <button type="submit" style={{ padding: '10px 30px', backgroundColor: '#8a100b', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Login
          </button>
        </form>
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;