import React, { useState, useEffect } from 'react';

function Overview() {
  const [goals, setGoals] = useState([]);
  const API_URL = 'http://localhost:5000/goals';

  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setGoals(data);
      } catch (error) {
        console.error('Error fetching goals:', error);
      }
    };

    fetchGoals();
  }, []);

  const totalGoals = goals.length;

  const totalSaved = goals.reduce((sum, goal) => sum + parseFloat(goal.savedAmount), 0);

  const completedGoals = goals.filter(
    (goal) => parseFloat(goal.savedAmount) >= parseFloat(goal.targetAmount)
  ).length;

  const calculateDaysLeft = (deadline) => {
    const today = new Date();
    const goalDate = new Date(deadline);
    const diffTime = goalDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getGoalStatus = (goal) => {
    const daysLeft = calculateDaysLeft(goal.deadline);
    const completed = parseFloat(goal.savedAmount) >= parseFloat(goal.targetAmount);

    if (completed) {
      return 'Completed';
    } else if (daysLeft < 0) {
      return 'Overdue';
    } else if (daysLeft <= 30) {
      return `Warning: ${daysLeft} days left`;
    } else {
      return `${daysLeft} days left`;
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px' }}>
      <h2>Overview</h2>

      <p><strong>Total Goals:</strong> {totalGoals}</p>
      <p><strong>Total Money Saved:</strong> KES {totalSaved}</p>
      <p><strong>Goals Completed:</strong> {completedGoals}</p>

      <h3>Goals Status</h3>
      <ul>
        {goals.map((goal) => (
          <li key={goal.id} style={{ marginBottom: '10px' }}>
            <strong>{goal.name}</strong> - {goal.category}
            <br />
            Status: {getGoalStatus(goal)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Overview;
