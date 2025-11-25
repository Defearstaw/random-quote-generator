import React, { useState } from 'react';
import './QuoteGenerator.css';

const QuoteGenerator = () => {
  const quotes = [
    { text: "Жизнь — это то, что с тобой происходит, пока ты строишь другие планы.", author: "Джон Леннон" },
    { text: "Самый лучший способ взяться за что-то — перестать говорить и начать делать.", author: "Уолт Дисней" },
    { text: "Ваше время ограничено, не тратьте его, живя чужой жизнью.", author: "Стив Джобс" },
    { text: "Победа — это еще не все, все — это желание побеждать.", author: "Винс Ломбарди" },
    { text: "Если вы думаете, что на что-то способны, вы правы; если думаете, что у вас ничего не получится — вы тоже правы.", author: "Генри Форд" },
  ];

  const [currentQuote, setCurrentQuote] = useState({ text: '', author: '' });

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  return (
    <div className="quote-generator">
      <h1>Генератор Случайных Цитат</h1>
      <div className="quote-box">
        {currentQuote.text ? (
          <>
            <p className="quote-text">"{currentQuote.text}"</p>
            <p className="quote-author">— {currentQuote.author}</p>
          </>
        ) : (
          <p className="placeholder">Нажмите на кнопку, чтобы получить мудрость!</p>
        )}
      </div>
      <button className="generate-button" onClick={generateRandomQuote}>
        Новая цитата
      </button>
    </div>
  );
};

export default QuoteGenerator;