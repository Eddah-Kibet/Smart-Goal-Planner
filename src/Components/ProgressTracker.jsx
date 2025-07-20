import React, { useState, useEffect } from 'react';

function ProgressTracking() {
  const [goals, setGoals] = useState([]);

  const API_URL = 'http://localhost:5163/goals';

  useEffect(() => {
    fetchGoals();
  }, []);

  const fetchGoals = () => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setGoals(data));
  };

  const calculateProgress = (goal) => {
    const { savedAmount, targetAmount } = goal;
    if (!savedAmount || !targetAmount) return 0;
    return ((savedAmount / targetAmount) * 100).toFixed(2);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px' }}>

      <ul>
        {goals.map((goal) => (
          <li key={goal.id} style={{ marginBottom: '20px' }}>
            <strong>{goal.name}  - {goal.category} </strong> <br />
            Target: KES {goal.targetAmount} 
            <br />
            Saved: KES {goal.savedAmount}
            <br />
            Remaining: KES {goal.targetAmount - goal.savedAmount}
            <br />

            <div style={{
                background: '#ddd',
                height: '10px',
                width: '100%',
                borderRadius: '5px',
                marginTop: '5px',
              }}>
              <div
                style={{
                  background: '#4caf50',
                  width: `${calculateProgress(goal)}%`,
                  height: '100%',
                  borderRadius: '5px',
                }}
              />
            </div>
            
            <small>{calculateProgress(goal)}% achieved</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProgressTracking;
