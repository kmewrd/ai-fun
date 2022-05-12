import React from 'react';
import './Card.css';

const Card = ({ genre, theme, result }) => {
  return (
    <div className='card'>
      <h3>Genre:</h3>
      <p>{genre}</p>
      <h3>Theme:</h3>
      <p>{theme}</p>
      <h3>Result:</h3>
      <p>{result}</p>
    </div>
  )
}

export default Card;