import { useState } from 'react';
import fetchIdea from '../../apiCalls';
import './Form.css';

const Form = ({ setIdeas }) => {
  const [genre, setGenre] = useState('');
  const [theme, setTheme] = useState('');
  const [error, setError] = useState(null);

  const handleClick = e => {
    e.preventDefault();
    validateForm();
  }

  const validateForm = () => {
    if (!genre) {
      setError('Please select a genre from the dropdown menu.')
    } else if (genre && !theme) {
      submitPrompt(genre, 'None');
      setError(null);
    } else {
      submitPrompt(genre, theme);
      setError(null);
    }
  }

  const submitPrompt = (genre, theme) => {
    fetchIdea(genre, theme)
      .then(data => {
        setIdeas(prevState => [{
          genre: genre,
          theme: theme,
          result: data.choices[0].text
        }, ...prevState])
      })
      .catch(err => setError('Something went wrong. Please try again later.'));
    clearForm();
  }

  const clearForm = () => {
    setGenre('');
    setTheme('');
  }

  return (
    <form>
      <div className='input-wrapper'>
        <label htmlFor='genre-select'>Genre</label>
        <select id='genre-select' value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option value='' disabled>Any</option>
          <option value='Action'>Action</option>
          <option value='Comedy'>Comedy</option>
          <option value='Drama'>Drama</option>
          <option value='Fantasy'>Fantasy</option>
          <option value='Horror'>Horror</option>
          <option value='Mystery'>Mystery</option>
          <option value='Romance'>Romance</option>
          <option value='Sci-Fi'>Sci-Fi</option>
          <option value='Thriller'>Thriller</option>
          <option value='Western'>Western</option>
        </select>
        <label htmlFor='theme-field'>Theme (optional)</label>
        <input id='theme-field' className='theme-field' placeholder='Example: Space Cowboys' value={theme} onChange={(e) => setTheme(e.target.value)} />
        {error && <p>{error}</p>}
      </div>
      <button onClick={e => handleClick(e)}>Submit</button>
    </form>
  )
}

export default Form;