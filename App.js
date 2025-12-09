import React, { useState, useEffect } from "react";

export default function App() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchQuote = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("https://api.adviceslip.com/advice");
      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();
      setQuote(data.content);
    } catch (err) {
      setError("Error fetching quote");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
    const interval = setInterval(fetchQuote, 5000); // osveži vsakih 5 sekund
    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className="app">
      <h1>Random Quote</h1>
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && <p className="quote">{quote}</p>}
      <button onClick={fetchQuote}>Fetch Now</button>
    </div>
  );
}
