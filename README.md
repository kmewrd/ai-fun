# Movie Idea Generator

**A front end application built by Kim Ward.**

- View the project specs [HERE](https://docs.google.com/document/d/1HZ6OTkaRZsz9rPKsCUv1_c8mfkNdRsvnoWjlIaWrKw0/edit?usp=sharing)
- Visit the deployed site [HERE](https://movie-idea-generator.herokuapp.com/)

## Description

This application allows users to generate a one- or two-sentence movie idea by sending a genre and optional theme to the [Open AI API](https://beta.openai.com/). Results are displayed in a list and include the genre, theme, and idea on each result card.

![Homepage with single result listed](https://user-images.githubusercontent.com/79027364/168400389-2e00203d-9b02-4070-bd4b-a66eb5347826.png)

## How to Run

```
1. Clone the repo down to your machine
2. Open the root directory for each repo and run `npm i` to install dependencies
4. Run `npm start` to initialize the webpage
5. Open the site by copying and pasting the server location http://localhost:3000/ in your address bar
```

---

## Features

- Submission form that generates a random movie idea
- Loading component/animation
- Local storage
- Ability to delete an idea from the results
- 100% Lighthouse Accessibility Audit Score
- Responsive layout

![Project demo gif](https://user-images.githubusercontent.com/79027364/168400913-83c96354-0997-403b-9204-af454103b321.gif)

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