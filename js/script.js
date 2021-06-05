/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
 * Array of objects containing famous quotes, sources, citations, and dates.
***/
const quotes = [
  {
    quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    source: "Benjamin Franklin"
  },
  {
    quote: "Hoping for the best, prepared for the worst, and unsurprised by anything in between.",
    source: "Maya Angelou",
    citation: "I Know Why the Caged Bird Sings",
    year: "1969",
    tag: "Literature"
  },
  {
    quote: "Never let the fear of striking out keep you from playing the game.",
    source: "Babe Ruth",
    tag: "Sports"
  },
  {
    quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    source: "Thomas A. Edison"
  },
  {
    quote: "Success is not final; failure is not fatal: It is the courage to continue that counts.",
    source: "Winston S. Churchill",
    tag: "Politics"
  }

];


/***
 * Generate a random number and get the quote object at the given index of the "quotes" array. 
***/

function getRandomQuote () {
  const randomNumber = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomNumber];
  return randomQuote
}

/*** 
 * Generate a random color and change the page background to that color.
 ***/

function randomColor () {
  const body = document.querySelector("body");
  const rVlaue = Math.floor(Math.random() * 256);
  const gVlaue = Math.floor(Math.random() * 256);
  const bVlaue = Math.floor(Math.random() * 256);
  const newColor = `rgb(${rVlaue}, ${gVlaue}, ${bVlaue})`;
  body.style.backgroundColor = newColor
}

/***
 * Build HTML for new random quote and insert into the "quote-box" div. Only concatenate spans if object contains citations/years. Change background color. 
***/

function printQuote () {
  const quoteBox = document.querySelector (".quote-box");
  const sourceHTML = document.querySelector(".source");
  const newQuoteObject = getRandomQuote();
  let newQuote = `
  <p class="quote">${newQuoteObject.quote}</p>
  <p class="source">${newQuoteObject.source}
  `;
  if (typeof newQuoteObject.citation === "string") {
    newQuote += `<span class="citation">${newQuoteObject.citation}</span>`
  }
  if (typeof newQuoteObject.year === "string" || typeof newQuoteObject.year === "number") {
    newQuote += `<span class="year">${newQuoteObject.year}</span>`    
  }
  if (typeof newQuoteObject.tag === "string") {
    newQuote += `<span class="tag"> - ${newQuoteObject.tag}</span>`
  }
  newQuote += `</p>`;
  quoteBox.innerHTML = newQuote;
  randomColor();    
}

/*** 
 * Timer to change the quote every ten seconds
 ***/

setInterval(() => { printQuote() }, 10000);



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);