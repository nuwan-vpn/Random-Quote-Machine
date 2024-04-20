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

  const [quote, setQuote] = useState<Quote>(getRandomQuote());

  return (
    <>
      {/* Render the quote and author */}
      <div className="background">
        <div id="quote-box">
          <div className="quote-content">
            <FaQuoteLeft size="20" style={{marginRight:"10px"}}/>
            <h2 id="text">{quote.quote}</h2>
            <FaQuoteRight size="20" style={{marginRight:"10px"}}/>
            <h4 id="author">- {quote.author}</h4>
          </div>
        </div>
      </div> 
    </>
  );
}

export default App;