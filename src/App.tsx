import { useState } from 'react';
import { FaTwitter, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import './App.css';
import quotesData from './assets/quotes.json';

interface Quote {
  quote: string;
  author: string;
}

function App() {
  
  const { quotes } = quotesData;

  const getRandomQuote = (): Quote => {
    return quotes[Math.floor(Math.random() * quotes.length)];
  };

  const getRandomColor = (): string => {
    const red = Math.floor(Math.random() * 128);
    const green = Math.floor(Math.random() * 128);
    const blue = Math.floor(Math.random() * 128);
  
    return `rgb(${red}, ${green}, ${blue})`;
  };

  const [quote, setQuote] = useState<Quote>(getRandomQuote());
  const [randomColor, setRandomColor] = useState<string>(getRandomColor());

  const changeQuote = () => {
      setQuote(getRandomQuote());
      setRandomColor(getRandomColor());
  }

  return (
    <>
      {/* Render the quote and author */}
      <div className="background"  style={{ backgroundColor: randomColor,  transition: 'background-color 0.3s ease-in-out'}}>
        <div id="quote-box" >
          <div className="quote-content" style={{ color: randomColor}} >
            
            <h2 id="text">
              <FaQuoteLeft size="20" style={{marginRight:"10px"}}/>
              {quote.quote}
              <FaQuoteRight size="20" style={{marginRight:"10px"}}/>
            </h2>
            
            <h4 id="author">- {quote.author}</h4>
          </div>
          <div className="buttons">
            <a href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.quote}-${quote.author}`}
              id='tweet-quote'
              style={{
                backgroundColor:"",
                marginRight:"10px"
              }}
            >
              <FaTwitter color='white'/>
            </a>
            <button id='new-quote' onClick={changeQuote} style={{ backgroundColor: randomColor,  transition: 'background-color 0.9s ease-in-out'}}>
              Change Quote
            </button>
          </div>
        </div>
      </div> 
    </>
  );
}

export default App;