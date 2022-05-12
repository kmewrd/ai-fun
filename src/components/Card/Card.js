import React from 'react';
import './Card.css';

const Card = ({ genre, theme, result }) => {
  return (
    <div className='card'>
      <h3>Genre: <span className='unbold'>{genre}</span></h3>
      <h3>Theme: <span className='unbold'>{theme}</span></h3>
      <h3>Result:</h3>
      <p>{result}</p>
    </div>
  )
}

export default Card;