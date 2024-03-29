import React from "react";

function QuoteCard({ quote }) {
  return (
    quote && (
      <div className="DisplayQuote">
        <img src={quote.image} alt={quote.character} />
        <ul>
          <li>Name: {quote.character}</li>
          <li>Quote: "{quote.quote}"</li>
        </ul>
      </div>
    )
  );
}

export default QuoteCard;
