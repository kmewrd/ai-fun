import React from 'react';
import Card from '../Card/Card';

const Ideas = ({ ideas }) => {
  const cards = ideas.map(idea => <Card key={idea.result} genre={idea.genre} theme={idea.theme} result={idea.result} />)

  return (
    <section>
    {cards}
    </section>
  )
}

export default Ideas;