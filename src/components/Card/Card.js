import React from 'react';
import './Card.css';

const Card = ({ genre, theme, result, id, deleteIdea }) => {
  return (
    <div className='card'>
      <h3>Genre: <span className='unbold'>{genre}</span></h3>
      <h3>Theme: <span className='unbold'>{theme}</span></h3>
      <h3>Result:</h3>
      <p>{result}</p>
      <button aria-label='Delete Idea' onClick={() => deleteIdea(id)}>DELETE</button>
    </div>
  )
}

export default Card;