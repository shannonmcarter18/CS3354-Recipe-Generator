import React from 'react';
import { useNavigate } from 'react-router-dom';

function Slide3() {
  const navigate = useNavigate();

  const goToCreateRecipe = () => {
    navigate('/');
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
          Landing Page
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
      <div style={{
        marginTop: '9rem', padding: '40px', display: 'flex',
        justifyContent: 'space-between', alignItems: 'flex-start'
      }}>
        {/* Left Title */}
        <div style={{ color: '#2f4956', fontSize: '50px', fontWeight: 'bold', lineHeight: '1.2' }}>
          Recipe<br />Generator
        </div>

        {/* 3 Cards */}
        <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
          {/* Card 1 */}
          <div style={{
            backgroundColor: '#2f4956', width: '150px', height: '150px',
            borderRadius: '10px', display: 'flex', flexDirection: 'column',
            justifyContent: 'center', alignItems: 'center'
          }}>
            <div style={{ fontSize: '40px', color: 'white' }}>🍗🍉</div>
            <div style={{ marginTop: '10px', color: '#f5e1d2', fontSize: '12px', textAlign: 'center' }}>
              Input your<br />ingredients
            </div>
          </div>

          {/* Card 2 */}
          <div style={{
            backgroundColor: '#2f4956', width: '150px', height: '150px',
            borderRadius: '10px', display: 'flex', flexDirection: 'column',
            justifyContent: 'center', alignItems: 'center'
          }}>
            <div style={{ fontSize: '40px', color: 'white' }}>🧠🖥️</div>
            <div style={{ marginTop: '10px', color: '#f5e1d2', fontSize: '12px', textAlign: 'center' }}>
              Let our technology<br />generate recipes for you
            </div>
          </div>

          {/* Card 3 */}
          <div style={{
            backgroundColor: '#2f4956', width: '150px', height: '150px',
            borderRadius: '10px', display: 'flex', flexDirection: 'column',
            justifyContent: 'center', alignItems: 'center'
          }}>
            <div style={{ fontSize: '40px', color: 'white' }}>🍳</div>
            <div style={{ marginTop: '10px', color: '#f5e1d2', fontSize: '12px', textAlign: 'center' }}>
              Start Cooking!
            </div>
          </div>
        </div>
      </div>

      {/* Create Recipe Button (Bottom Right) */}
      <div style={{
        position: 'absolute', bottom: '40px', right: '40px'
      }}>
        <button
          onClick={goToCreateRecipe}
          style={{
            backgroundColor: '#04372e', color: 'white', padding: '10px 20px',
            borderRadius: '20px', fontSize: '14px', fontWeight: 500,
            border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px'
          }}
        >
          Create Recipe ➕
        </button>
      </div>
    </div>
  );
}

export default Slide3;
