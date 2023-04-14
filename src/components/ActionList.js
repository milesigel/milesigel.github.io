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
            <p>The Pub Purity Test has historically served as a segue from not going out before highschool to true college life at Rice.</p>
            <p>It's a voluntary opportunity for friend groups to bond, and for students to track the maturation of their experiences throughout college.</p>
            <p>Caution: This is not a bucket list. Completion of all items on this test will likely result in hype.</p>
            <p>Click on every item you have done. MPS stands for Member of the Preferred Sex.</p>
          </div>
          <div className="action-container">
            {actions.map((action, index) => (
              <div
                key={index}
                className={`action ${completedActions.includes(action.id) ? 'completed' : ''}`}
                onClick={() => toggleAction(action.id)}
              >
                {completedActions.includes(action.id) && <span className="checkmark">🍺</span>}
                <span className="action-text"> {action.id}. {action.name}?</span>
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
