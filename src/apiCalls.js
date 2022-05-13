const apiKey = process.env.REACT_APP_API_KEY

const fetchIdea = (genre, theme) => {
  const completion = {
    "prompt": `Genre: Thriller\nTheme (optional): None\nOne-Sentence Movie Idea: An incredibly wealthy film student refuses to acknowledge that his favorite actor, recently deceased, will not be able to star in his thesis film, so he has him brought back from the dead - but the movie star, reanimated, now has other plans.\n    \nGenre: ${genre}\nTheme (optional): ${theme}\nOne-Sentence Movie Idea:`,
    "temperature": 0,
    "max_tokens": 60,
    "top_p": 1,
    "frequency_penalty": 0,
    "presence_penalty": 0
  }

  return fetch('https://api.openai.com/v1/engines/text-curie-001/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify(completion)
  }).then(response => {
    if (!response.ok) {
      throw new Error();
    } else {
      response.json();
    }
  })
}

export default fetchIdea;