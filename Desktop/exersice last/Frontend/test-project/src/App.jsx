import React from 'react';
import BookCard from './components/BookCard';

function App() {
  const books = [
    { title: "Book A", author: "Author A", year: 2020, price: 25 },
    { title: "Book B", author: "Author B", year: 2021, price: 30 },
  ];

  return (
    <div>
      <h1>My Bookstore</h1>
      <div className="book-list">
        {books.map((book, idx) => (
          <BookCard key={idx} {...book} />
        ))}
      </div>
    </div>
  );
}

export default App;
