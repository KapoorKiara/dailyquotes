function Favorites({ favorites }) {
  return (
    <div className="favorites">
      <h2>Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <ul>
          {favorites.map((q, idx) => (
            <li key={idx}>
              "{q.text}" - <em>{q.author}</em> ({q.category})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}



export default Favorites;
