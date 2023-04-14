import React from 'react';
import '../styles/FinalScore.css';

function FinalScore({ score }) {
  const handleShare = () => {
    const url = `https://twitter.com/intent/tweet?text=I scored ${score} on the Pub Purity Test!&hashtags=PubPurityTest`;
    window.open(url, '_blank');
  };

  return (
    <div className="final-score">
      <h2>Final Score</h2>
      <p>Your score: {score}</p>
      <button onClick={handleShare}>
        <img src="https://upload.wikimedia.org/wikipedia/sco/9/9f/Twitter_bird_logo_2012.svg" alt="Twitter logo" />
        Share on Twitter
      </button>
    </div>
  );
}

export default FinalScore;
