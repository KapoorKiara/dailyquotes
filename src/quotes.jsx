function QuoteBox({ quote, onNew, onFav }) {
  return (
    <div className="quote-box">
      <p className="quote">"{quote.text}"</p>
      <p className="author">- {quote.author}</p>
      <p className="category">(Category: {quote.category})</p>
      <div className="btn-group">
        <button onClick={onNew}>New Quote</button>
        <button onClick={onFav}>❤️</button>
      </div>
    </div>
  );
}

export default QuoteBox;
