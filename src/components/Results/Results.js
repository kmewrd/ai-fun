import React from 'react';
import Card from '../Card/Card';

const Results = ({ results }) => {
  const cards = results.map(result => <Card key={result.result} genre={result.genre} theme={result.theme} result={result.result} />)

  return (
    <section>
    {cards}
    </section>
  )
}

export default Results;