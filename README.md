# Movie Idea Generator

**A front end application built by Kim Ward.**

- View the project specs [HERE](https://docs.google.com/document/d/1HZ6OTkaRZsz9rPKsCUv1_c8mfkNdRsvnoWjlIaWrKw0/edit?usp=sharing)
- Visit the deployed site [HERE](https://movie-idea-generator.herokuapp.com/)

## Description

This application allows users to generate a one- or two-sentence movie idea by sending a genre and optional theme to the [OpenAI API](https://beta.openai.com/). Results are displayed in a list and include the genre, theme, and idea on each result card.

![Homepage with single result listed](https://user-images.githubusercontent.com/79027364/168400389-2e00203d-9b02-4070-bd4b-a66eb5347826.png)

## How to Run

```
1. Clone the repo down to your machine
2. Sign up for an API key from OpenAI
3. Open the root directory of your cloned repo
4. Create a .env.local file and store your API key as REACT_APP_API_KEY
5. Run `npm i` to install dependencies
6. Run `npm start` to initialize the webpage
7. If the site doesn't automatically open, copy and paste the server location in your address bar
```

---

## Features

- Submission form that generates a random movie idea
- Loading component/animation
- 100% Lighthouse Accessibility Audit Score
- Responsive layout
- Stretch Feature: Local storage, including the ability to delete an idea from results

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
- Add a "Surpise Me" button that generates an idea based on a random genre and selection from a bank of themes.

## Reflections
As a “stretch tech” for this challenge, I chose to use the Web Storage API to save movie ideas in the client’s local storage. This enables a user to view the ideas they’ve generated even if they navigate away from the page and return later. Before this project I had never used local storage, but it seemed like a lightweight way to save responses without building out a server. While React Hooks made the implementation of this feature fairly straightforward, it did take some troubleshooting to ensure that Hooks were called in the right order and that local storage was not cleared or reset on page refresh.
