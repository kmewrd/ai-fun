import { useState } from 'react';

const Form = () => {
  const [genre, setGenre] = useState('');
  const [theme, setTheme] = useState('');

  return (
    <form>
      <select value={genre} onChange={(e) => setGenre(e.target.value)}>
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
      <textarea placeholder='Enter your prompt here...' value={theme} onChange={(e) => setTheme(e.target.value)}></textarea>
    </form>
  )
}

export default Form;