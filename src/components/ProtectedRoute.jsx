import { useEffect, useState } from 'react';
// 1. Import the image file directly
import bcSeal from '../assets/front_page/bc_seal.png';

const ProtectedRoute = ({ children, onLoginSuccess, logoutSignal }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('lab-auth') === 'true' || localStorage.getItem('isAuthenticated') === 'true'
  );
  const [isAdmin, setIsAdmin] = useState(
    localStorage.getItem('lab-admin') === 'true' || localStorage.getItem('isAdmin') === 'true'
  );

  useEffect(() => {
    if (logoutSignal > 0) {
      setIsAuthenticated(false);
      setIsAdmin(false);
      setPassword('');
      setShowPassword(false);
    }
  }, [logoutSignal]);

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (password === 'OpeilAdmin77') {
      localStorage.setItem('lab-auth', 'true');
      localStorage.setItem('lab-admin', 'true');
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('isAdmin', 'true');
      onLoginSuccess?.(true);
      setIsAuthenticated(true);
      setIsAdmin(true);
    } else if (password === 'OpeilLab2026') { //
      localStorage.setItem('lab-auth', 'true');
      localStorage.setItem('lab-admin', 'false');
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('isAdmin', 'false');
      onLoginSuccess?.(false);
      setIsAuthenticated(true);
      setIsAdmin(false);
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
        <p>Enter Access Code</p>
        <form onSubmit={handleLogin} style={{ marginTop: '20px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '250px',
              margin: '0 auto',
              border: '1px solid #8a100b',
              borderRadius: '4px',
              overflow: 'hidden',
              backgroundColor: '#fff',
            }}
          >
            <input 
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter Lab Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                padding: '12px',
                border: 'none',
                width: '100%',
                outline: 'none',
              }}
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              style={{
                border: 'none',
                background: 'transparent',
                color: '#777',
                padding: '0 10px',
                height: '100%',
                cursor: 'pointer',
                fontSize: '1rem',
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {showPassword ? (
                  <>
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" />
                    <circle cx="12" cy="12" r="3" />
                  </>
                ) : (
                  <>
                    <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20C5 20 1 12 1 12a21.73 21.73 0 0 1 5.06-6.94" />
                    <path d="M9.9 4.24A10.94 10.94 0 0 1 12 4c7 0 11 8 11 8a21.84 21.84 0 0 1-3.22 4.76" />
                    <path d="M14.12 14.12a3 3 0 1 1-4.24-4.24" />
                    <path d="M1 1l22 22" />
                  </>
                )}
              </svg>
            </button>
          </div>
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