# Tetris

This is a JavaScript heavy project on recreating the classic game of tetris on the web using JavaScript, HTML, and CSS.
## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview
Having existed since 1984, Tetris has become widely known across the globe as a classic computer game where pieces fall from the sky and you have to rearrange them as they fall. The shapes are
simplistic, given the nature of 4-bit and 8-bit technology in the 80's. Alexey Pajitnov created a game fun for anyone and simple enough for everyone to understand. Here we will be trying to recreate the game and have fun styling the game as we go!

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- Play the game of Tetris on web or mobile
- Use either their keys or touch-pad

### Screenshot

![](./screenshot.jpg)

### Links

- Live URL to Game: [Play the game here!](https://living-marge-tetris.netlify.app/)

## My process


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

When using ES6 modules, it is important to let your browser know it will expect to receive modules. This is done through the type = "module" tag in the html script linking the Tetris app.

I received a "Uncaught SyntaxError: Cannot use import statement outside a module" error and this fixed it right up.
```html
</main>
<script type="module" src="./app.js" type="text/javascript"> </script>
<script type="module" src="./js/constants.js"> </script>
<script type="module" src="./js/board.js"> </script>
<script type="module" src="./js/piece.js"> </script>
</body>
</html>
```
```css
.proud-of-this-css {
  color: ;
}
```
```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
```

### Continued development

### Useful resources

- [Example resource 1](https://www.example.com) -
- [Example resource 2](https://www.example.com) - 

## Author