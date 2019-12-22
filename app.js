//             Document Object Model
//               TASTE OF THE DOM
/***
 * Pre-requists: HTML & CSS
 * You can manipulate html and css with javascript
 *
 * WHAT IS IT?
 *   The DOM is a JavaScript representation of a webpage.
 *   It's your JS "window" into the contents of a webpage
 *   Its just a bunch of objects that you ca interact with via JS
 *
 *
 * Document Object Model
 *
 *
 * The DOM just consists of objects
 *
 *
 *    // create a new element
 *    const myImg = document.createElement('img');
 *
 *    // insert a source to the newly created img
 *    myImg.src = 'https://imgs.6sqft.com/wp-content/uploads/2017/01/10140523/hiking-trail.jpg';
 *
 *    // resize image
 *    myImg.style.width = '200px';
 *
 *    // append/ add to the html
 *    document.body.append(myImg);
 
 *    // Change the postion theough JS css
 *    myImg.style.transform = 'translate(300px, 200px)';
 *
 *
 *
 */

// create a new element
const myImg = document.createElement('img');

// insert a source to the newly created img
myImg.src = 'https://imgs.6sqft.com/wp-content/uploads/2017/01/10140523/hiking-trail.jpg';
// resize image
myImg.style.width = '200px';
// append/ add to the html
document.body.append(myImg);
// to make the jumping around smoother with transition
myImg.style.transition = 'all 2s';

// make a new css style sheet
const sheet = new CSSStyleSheet();
// apply a style to everything in the body
sheet.replaceSync('* {transition: all 2s');
// add that style sheet in
document.adoptedStyleSheets = [sheet]

// Do it for all the children of the body except scripts
const allEls = document.body.children;

setInterval(() => {
  // when we select everything from page and for each 1 im going to give it a new transform with a ranom x and y every 2ms
  for (let el of allEls) {
    // we can rotate everything
    const rotation = Math.floor(Math.random() * 360);
    // the client window size * math random
    const x = Math.floor(document.body.clientWidth * Math.random());
    const y = Math.floor(document.body.clientHeight * Math.random())
    // Change the postion theough JS css, transform wants number of degrees to rotate
    el.style.transform = `translate(${x}px,${y}px) rotate(${rotation}deg)`;
  }

}, 2000)

















