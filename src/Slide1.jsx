import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Slide1() {
  const [ingredients, setIngredients] = useState([]);
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const addIngredient = () => {
    if (input.trim() !== '') {
      setIngredients([...ingredients, input.trim()]);
      setInput('');
    }
  };

  const clearIngredients = () => {
    setIngredients([]);
  };

  const saveRecipe = () => {
    navigate('/saved');
  };

  return (
    <div style={{ backgroundColor: '#2f4956', minHeight: '100vh', margin: '0', padding: '0' }}>
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

      {/* Main */}
      <div style={{
        marginTop: '9rem', backgroundColor: '#2f4956',
        borderRadius: '6px', padding: '60px 50px', textAlign: 'center',
        width: '700px', marginLeft: 'auto', marginRight: 'auto'
      }}>
        <input
          type="text"
          placeholder="Search recipe or ingredients..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            width: '350px', padding: '10px', fontSize: '16px',
            borderRadius: '8px', border: 'none', outline: 'none',
            backgroundColor: '#f0f4f5', marginBottom: '20px'
          }}
        />
        <br />
        <button
          onClick={addIngredient}
          style={{
            backgroundColor: '#e56b6f', color: 'white', border: 'none',
            padding: '10px 25px', borderRadius: '20px', fontSize: '16px',
            marginTop: '15px', cursor: 'pointer'
          }}
        >
          ➕ Add Ingredients
        </button>

        {ingredients.length > 0 && (
          <div style={{ marginTop: '30px', color: 'white', fontSize: '18px', fontWeight: 'bold' }}>
            Ingredients:
            {ingredients.map((item, index) => (
              <div key={index} style={{ marginTop: '10px', color: 'white' }}>
                {index + 1}. {item}
              </div>
            ))}
          </div>
        )}

        <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <button
            onClick={saveRecipe}
            style={{
              backgroundColor: 'black', color: 'white', padding: '10px 40px',
              fontSize: '15px', fontWeight: 500, borderRadius: '10px',
              border: 'none', cursor: 'pointer'
            }}
          >
            Save Recipe
          </button>
          <button
            onClick={clearIngredients}
            style={{
              backgroundColor: 'black', color: 'white', padding: '10px 40px',
              fontSize: '15px', fontWeight: 500, borderRadius: '10px',
              border: 'none', cursor: 'pointer'
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Slide1;
