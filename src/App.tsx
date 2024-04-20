import { useState } from 'react';
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
      <div id="quote-box">
        <div className="quote-content">
          <h2 id="text">{quote.quote}</h2>
          <h4 id="author">- {quote.author}</h4>
        </div>
      </div>
    </>
  );
}

export default App;