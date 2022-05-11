import { useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import Results from './components/Results/Results';

const App = () => {
  const [results, setResults] = useState([]);

  return (
    <main className="App">
      <h1>Movie Idea Generator</h1>
      <Form setResults={setResults}/>
      <Results results={results}/>
    </main>
  );
}

export default App;
