const apiKey = process.env.REACT_APP_API_KEY

const fetchIdea = (genre, theme) => {
  const completion = {
    "prompt": `Genre: Mystery\nTheme (optional): None\nOne-Sentence Movie Idea: In search of an Instagram-worthy photo location, a content creator takes a few wrong turns and ends up discovering a charming small American hamlet that has remained unchanged by the outside world since the 1950s.\n    \nGenre: ${genre}\nTheme (optional): ${theme}\nOne-Sentence Movie Idea:`,
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
  }).then(response => response.json())
}

export default fetchIdea;