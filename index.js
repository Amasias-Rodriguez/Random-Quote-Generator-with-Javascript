const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

const apiURL = "https://api.quotable.io/random";


async function getQuote(){


    try {
        btnEl.innerText = "Loading...";
        btnEl.disable = true;
        quoteEl.innerText = "Updating...";
        authorEl.innerText = "Updating...";
        const response = await fetch(apiURL);
        const data = await response.json();
        const quoteContent = data.content;
        const quoteAuthor = data.author;
        quoteEl.innerText = quoteContent;
        authorEl.innerText = "~ " + quoteAuthor;
        btnEl.innerText = "Get a quote";
        btnEl.disabled = false;
    } catch (error) {
        quoteEl.innerText = "An error happened, try again later";
        authorEl.innerText = "An error happened, try again later";
    }        
}

getQuote();

btnEl.addEventListener("click", getQuote);
