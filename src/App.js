import { useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import Ideas from './components/Ideas/Ideas';

const App = () => {
  const [ideas, setIdeas] = useState([]);

  return (
    <main className="App">
      <h1>Movie Idea Generator</h1>
      <Form setIdeas={setIdeas}/>
      <Ideas ideas={ideas}/>
    </main>
  );
}

export default App;
