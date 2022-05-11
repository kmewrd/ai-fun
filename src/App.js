import './App.css';
import Form from './components/Form/Form';
import Results from './components/Results/Results';

const App = () => {
  return (
    <main className="App">
      <h1>Movie Idea Generator</h1>
      <Form />
      <Results />
    </main>
  );
}

export default App;
