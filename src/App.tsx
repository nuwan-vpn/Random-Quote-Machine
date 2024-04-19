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
      <div>
        <p>{quote.quote}</p>
        <p>- {quote.author}</p>
      </div>
    </>
  );
}

export default App;