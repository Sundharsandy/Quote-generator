
const quoteContainer = document.getElementById('quote-generator');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');


let apiQuotes=[];
// show new quote
function newQuote(){
   // pick new random quote
   const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

   // const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
   // check if author field is blank and replace it with
   if(!quote.author){
      authorText.textContent = 'unknown';
   }else{
      authorText.textContent = quote.author;
   }
   // check quote lenth to styling
   if(quote.text.length > 100 ){
      quoteText.classList.add('long-qoute');
   }else{
      quoteText.classList.remove('long-quote');
   }

   quoteText.textContent = quote.text;
}
// get quote from api
async function getQuotes(){
   const apiUrl = 'https://type.fit/api/quotes';
   try{
     
      const response = await fetch(apiUrl);
      apiQuotes = await response.json();
      newQuote();


   }catch(error){
      // cath the error
   }
}
// tweet quote
function tweetQuote(){
   const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent} `;
   window.open(twitterUrl, '_blank');
}
// event listerner
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);
// onload
getQuotes();
