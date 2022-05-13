# Movie Idea Generator

**A front end application built by Kim Ward.**

- View the project specs [HERE](https://docs.google.com/document/d/1HZ6OTkaRZsz9rPKsCUv1_c8mfkNdRsvnoWjlIaWrKw0/edit?usp=sharing)
- Visit the deployed site [HERE](https://movie-idea-generator.herokuapp.com/)

## How to Run

```
1. Clone the repo down to your machine
2. Open the root directory for each repo and run `npm i` to install dependencies
4. Run `npm start` to initialize the webpage
5. Open the site by copying and pasting the server location http://localhost:3000/ in your address bar
```

This application allows users to generate a one- or two-sentence movie idea by sending a genre and optional theme to the [Open AI API](https://beta.openai.com/). Results are displayed in a list and include the genre, theme, and idea on each result card.

---

## Features

- Submission form that gets a random movie idea
- Loading component/animation
- 100% Lighthouse Accessibility Audit Score

---

## Technologies Used
- JavaScript
- React
- CSS
- HTML
- Cypress
- Fetch API
- VS Code

### Future Additions & Improvements
- Add an "I'm Feeling Lucky" button that generates an idea based on a random genre and selection from a bank of themes.
- Add local storage to view results on refresh.