import React from 'react';
import { useNavigate } from 'react-router-dom';

function Slide2() {
  const navigate = useNavigate();

  const goToLandingPage = () => {
    navigate('/landing');
  };

  return (
    <div style={{ backgroundColor: '#f5e1d2', minHeight: '100vh', margin: '0', padding: '0' }}>
      {/* Header */}
      <div style={{
        position: 'fixed', top: 0, left: 0, width: '100%', backgroundColor: '#2f4956',
        padding: '10px 30px', zIndex: 1000
      }}>
        <p style={{
          color: 'white', fontSize: '24px', fontWeight: 'bold', margin: '0'
        }}>
          Recipe Generator
        </p>
      </div>

      {/* Navbar */}
      <div style={{
        position: 'fixed', top: '3rem', left: 0, width: '100%',
        backgroundColor: '#04372e', display: 'flex', gap: '40px',
        alignItems: 'center', padding: '15px 30px', borderBottom: '5px solid #f5e1d2', zIndex: 999
      }}>
        <a href="/landing" style={{
          color: 'white', textDecoration: 'none', fontSize: '18px', fontWeight: 500
        }}>Home</a>
        <a href="/saved" style={{
          color: 'white', textDecoration: 'none', fontSize: '18px', fontWeight: 500
        }}>Saved Recipes</a>
      </div>

      {/* Main Content */}
      <div style={{ marginTop: '9rem', textAlign: 'center', padding: '30px' }}>
        {/* Top Title */}
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', padding: '0 50px'
        }}>
          <h1 style={{ fontSize: '50px', color: '#2f4956', textAlign: 'left' }}>
            Your Saved<br />Recipes
          </h1>

          {/* New Recipe Button */}
          <button
            onClick={goToLandingPage}
            style={{
              backgroundColor: '#04372e', color: 'white', padding: '10px 20px',
              borderRadius: '20px', fontSize: '14px', fontWeight: 500, border: 'none',
              cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px'
            }}
          >
            New Recipe ➕
          </button>
        </div>

        {/* Cards */}
        <div style={{
          display: 'flex', justifyContent: 'center', gap: '20px',
          marginTop: '60px', flexWrap: 'wrap'
        }}>
          {['Appetizers', 'Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Drinks', 'Snacks'].map((category, index) => (
            <div key={index} style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center'
            }}>
              <div style={{
                width: '80px', height: '80px', backgroundColor: '#2f4956',
                borderRadius: '8px', display: 'flex', justifyContent: 'center',
                alignItems: 'center', marginBottom: '10px'
              }}>
                <div style={{ fontSize: '30px', color: 'white' }}>🍗🍉</div>
              </div>
              <div style={{
                fontSize: '14px', color: '#2f4956', fontWeight: '500'
              }}>
                {category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slide2;
