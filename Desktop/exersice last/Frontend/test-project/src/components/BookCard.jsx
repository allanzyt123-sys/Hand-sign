import React from 'react';
import './BookCard.css';

const BookCard = ({ title, author, year, price }) => {
  return (
    <div className="book-card">
      <h3>{title}</h3>
      <p>Author: {author}</p>
      <p>Published: {year}</p>
      <p>Price: ${price}</p>
    </div>
  );
};

export default BookCard;
