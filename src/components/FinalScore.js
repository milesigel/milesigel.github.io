import React from 'react';
import '../styles/FinalScore.css';

function FinalScore({ score }) {
  const handleShare = () => {
    const url = `https://twitter.com/intent/tweet?text=I scored ${score} on the Pub Purity Test!&hashtags=PubPurityTest`;
    window.open(url, '_blank');
  };

  return (
    <div className="final-score">
      <img src="./wooly.png" alt="Pub Purity Test" className="final-score__image" />
      <h2 className="final-score__heading">Final Score</h2>
      <p className="final-score__text">Your score: {100-score}</p>
      <button onClick={handleShare} className="final-score__button">
        <img src="https://upload.wikimedia.org/wikipedia/sco/9/9f/Twitter_bird_logo_2012.svg" alt="Twitter logo" className="final-score__button-icon" />
        Share on Twitter
      </button>
    </div>
  );
}

export default FinalScore;
