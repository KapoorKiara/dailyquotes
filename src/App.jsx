import { useState, useEffect } from "react";
import QuoteBox from "./quotes.jsx";
import Favorites from "./favorite.jsx";

const CATEGORIES = ["All", "Motivation", "Wisdom", "Humor", "Favorites"];

function App() {
  const [quote, setQuote] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [category, setCategory] = useState("All");

  const showFav = category === "Favorites";

  useEffect(() => {
    if (!showFav) fetchQuote();
  }, [category]);

  async function fetchQuote() {
  try {
    const resp = await fetch('https://api.adviceslip.com/advice');
    const data = await resp.json();
    setQuote({
      text: data.slip.advice, 
      author: "Unknown", 
      category: category 
    });
  } catch (err) {
    console.error("Fetch error:", err);
  }
}


  const handleNew = () => fetchQuote();
  const handleFavorite = () => {
    if (
      quote &&
      !favorites.some(fav => fav.text === quote.text)
    ) {
      setFavorites([...favorites, quote]);
    }
  };

  return (
    <div className="app">
      <h1>Daily Quotes</h1>

      <div className="category-buttons">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            className={cat === category ? "active" : ""}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {!showFav && quote && (
        <QuoteBox quote={quote} onNew={handleNew} onFav={handleFavorite} />
      )}

      {showFav && <Favorites favorites={favorites} />}
    </div>
  );
}

export default App;
