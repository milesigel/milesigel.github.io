import React, { useState } from 'react';
import '../styles/ActionList.css';
import actions from '../data/questions.json';
import FinalScore from './FinalScore';

function ActionList() {
  const [completedActions, setCompletedActions] = useState([]);
  const [score, setScore] = useState(0);
  const [showFinalScore, setShowFinalScore] = useState(false);

  const toggleAction = (index) => {
    const actionIndex = completedActions.indexOf(index);
    if (actionIndex === -1) {
      setCompletedActions([...completedActions, index]);
    } else {
      setCompletedActions([
        ...completedActions.slice(0, actionIndex),
        ...completedActions.slice(actionIndex + 1),
      ]);
    }
  };

  const calculateScore = () => {
    return completedActions.length;
  };

  const handleGetScoreClick = () => {
    const score = calculateScore();
    setScore(score);
    setShowFinalScore(true);
  };

  return (
    <div className="action-list">
      {!showFinalScore && (
        <>
          <div className="instructions">
            <h1>Instructions</h1>
            <p>Complete as many actions as you can to increase your score.</p>
          </div>
          <div className="action-container">
            {actions.map((action, index) => (
              <div
                key={index}
                className={`action ${completedActions.includes(action.id) ? 'completed' : ''}`}
                onClick={() => toggleAction(action.id)}
              >
                {completedActions.includes(action.id) && <span className="checkmark">🍺</span>}
                <span className="action-text">{action.name}</span>
              </div>
            ))}
          </div>
          <div className="score-container">
            <button onClick={handleGetScoreClick}>Get Score</button>
            {score !== 0 && <p>Your score: {score}</p>}
          </div>
        </>
      )}
      {showFinalScore && <FinalScore score={score} />}
    </div>
  );
}

export default ActionList;
