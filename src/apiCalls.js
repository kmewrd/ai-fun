const apiKey = process.env.REACT_APP_API_KEY

const fetchIdea = (genre, theme) => {
  const completion = {
    "prompt": `Genre: Thriller\nTheme (optional): Murder\nOne-Sentence Movie Idea: The spouse of a dedicated method actor begins to wonder if their latest role has gotten \"stuck\" with them - when bodies begin turning up in ways reminiscent of their latest movie, about a brilliant and methodical serial killer.\n    \nGenre: ${genre}\nTheme (optional): ${theme}\nOne-Sentence Movie Idea:`,
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