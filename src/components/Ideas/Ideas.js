import React from 'react';
import Card from '../Card/Card';
import ReactLoading from 'react-loading';
import './Ideas.css';

const Ideas = ({ ideas }) => {
  const cards = ideas.map(idea => <Card key={idea.result} genre={idea.genre} theme={idea.theme} result={idea.result} />)

  return (
    <section className='ideas-wrapper'>
      <h2>Results</h2>
      {cards.length ? cards : <p>No ideas to display...yet!</p>}
    </section>
  )
}

export default Ideas;