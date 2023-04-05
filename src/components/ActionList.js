import React, { useState } from 'react';
import '../styles/ActionList.css';
import actions from '../data/questions.json';

function ActionList() {
  const [completedActions, setCompletedActions] = useState([]);

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

  return (
    <div className="action-list">
      <h2>Actions</h2>
      {actions.map((action, index) => (
        <div
          key={index}
          className={`action ${completedActions.includes(index) ? 'completed' : ''}`}
          onClick={() => toggleAction(index)}
        >
          {completedActions.includes(index) && <span className="checkmark">&#10003;</span>}
          <span className="action-text">{action.name}</span>
        </div>
      ))}
      <p>Number of completed actions: {completedActions.length}</p>
    </div>
  );
}

export default ActionList;


// import React, { useState } from 'react';
// import '../styles/ActionList.css';
// import actions from '../data/questions.json';

// function ActionList() {
//   const [actionList, setActionList] = useState(actions);

//   const handleActionClick = (id) => {
//     const updatedActionList = actionList.map((action) => {
//       if (action.id === id) {
//         return { ...action, completed: !action.completed };
//       }
//       return action;
//     });
//     setActionList(updatedActionList);
//   };

//   const completedActionsCount = actionList.filter(
//     (action) => action.completed
//   ).length;

//   return (
//     <div className="action-list-container">
//       <h2>Action List</h2>
//       <p>
//         {completedActionsCount} of {actionList.length} actions completed
//       </p>
//       <ul className="action-list">
//         {actionList.map((action) => (
//           <li
//             key={action.id}
//             className={`action ${action.completed ? 'completed' : ''}`}
//             onClick={() => handleActionClick(action.id)}
//           >
//             <span>{action.name}</span>
//             {action.completed && <span className="checkmark">&#10003;</span>}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ActionList;
