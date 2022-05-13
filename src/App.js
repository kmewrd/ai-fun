import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form/Form';
import Ideas from './components/Ideas/Ideas';

const App = () => {
  const [ideas, setIdeas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    localStorage.setItem('ideas', JSON.stringify(ideas));
  }, [ideas]);

  useEffect(() => {
    const storedIdeas = JSON.parse(localStorage.getItem('ideas'));
    storedIdeas.length && setIdeas(storedIdeas);
  }, []);

  const deleteIdea = id => {
    const filteredIdeas = ideas.filter(idea => idea.id !== id);
    setIdeas(filteredIdeas);
  }

  return (
    <main className="App">
      <h1>Movie Idea Generator</h1>
      <Form setIdeas={setIdeas} setIsLoading={setIsLoading} />
      <Ideas ideas={ideas} isLoading={isLoading} deleteIdea={deleteIdea} />
    </main>
  );
}

export default App;
