import React from 'react';

const Card = ({ genre, theme, result }) => {
  return (
    <div>
      <h2>Genre:</h2>
      <p>{genre}</p>
      <h2>Theme:</h2>
      <p>{theme}</p>
      <h2>Result:</h2>
      <p>{result}</p>
    </div>
  )
}

export default Card;