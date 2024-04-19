import { useState } from 'react'
import './App.css'

function App() {
  interface Quote{
    quote:string,
    author:string
  }

  const getRandomQuote = () : Quote{
    
  }

  const [quote, setQuote] = useState<Quote>(getRandomQuote());

  return (
    <>
      
    </>
  )
}

export default App
