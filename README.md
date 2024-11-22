# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/signup-form-with-success-message-z9eTox4jbo](https://www.frontendmentor.io/solutions/signup-form-with-success-message-z9eTox4jbo)
- Live Site URL: [newsletter-sign-up-azure.vercel.app/](https://newsletter-sign-up-azure.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Vite](https://vitejs.dev/) - React framework

### What I learned

```js
const regex = /^^\w+([.-]?\w+)@\w+([.-]?\w+)(\w{2,3})+$/;
if (!regex.test(email)) {
  e.target.classList.add("border-rose-400", "bg-rose-100", "text-rose-600");
  setErr(true);
} else {
  e.target.classList.remove("border-rose-400", "bg-rose-100", "text-rose-600");
  setErr(false);
}
```

## Author

- Twitter - [@\_tetraaa](https://www.twitter.com/_tetraaa)
