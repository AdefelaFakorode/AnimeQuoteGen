import React, {useState, useEffect} from 'react';
import Quote from './components/Quote';
function App() {
    const [quote, setQuote] = useState({
        anime: null,
        character: null,
        quote: null
    });

    const fetchQuote = async () => {
        const response = await fetch('https://animechan.xyz/api/random');
        return response.json();
    };

    const generate = async ()=>{
        setQuote(await fetchQuote());
    }

    useEffect(() => {
        const fetchData = async () => {
            setQuote(await fetchQuote());
        };
    
        fetchData();
    }, []);

  return (
    <div>
      <Quote quote ={quote} />
      <button onClick={generate}>Generate new quote</button>
    </div>
  )
}

export default App;
