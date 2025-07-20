import React, { useState, useEffect } from 'react';

function MakeDeposit() {
  const [goals, setGoals] = useState([]);
  const [selectedGoalId, setSelectedGoalId] = useState('');
  const [depositAmount, setDepositAmount] = useState('');

  const API_URL = 'http://localhost:5163/goals';

  // Fetch goals using fetch API
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

  const handleDeposit = async (e) => {
    e.preventDefault();

    if (!selectedGoalId || !depositAmount) {
      alert('Select a goal and enter deposit amount');
      return;
    }

    const goal = goals.find((g) => g.id === parseInt(selectedGoalId));
    if (!goal) {
      alert('Goal not found');
      return;
    }

    const updatedAmount = parseFloat(goal.savedAmount) + parseFloat(depositAmount);

    try {
      await fetch(`${API_URL}/${selectedGoalId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ savedAmount: updatedAmount }),
      });

      alert(`Deposited KES ${depositAmount} to ${goal.name}`);

      // Clear input
      setDepositAmount('');
      setSelectedGoalId('');

      // Refresh goals list
      const res = await fetch(API_URL);
      const data = await res.json();
      setGoals(data);
    } catch (error) {
      console.error('Error making deposit:', error);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px' }}>
      <h2>Make a Deposit</h2>

      <form onSubmit={handleDeposit}>
        <div>
          <label>Select Goal:</label>
          <select
            value={selectedGoalId}
            onChange={(e) => setSelectedGoalId(e.target.value)}
            required
          >
            <option value="">--Select--</option>
            <option value="">Short-Term goals(0-2 years)</option>
            <option value="">Medium-Term goals(2-5 years)</option>
            <option value="">Long-Term goals(5+ years)</option>
            <option value="">Wealth-building goals</option>
            <option value="">Debt reduction goals</option>
            <option value="">Lifestyle goals</option>
            <option value="">Security goals</option>
            <option value="">Charitable goals</option>

            {goals.map((goal) => (
              <option key={goal.id} value={goal.id}>
                {goal.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Deposit Amount:</label>
          <input
            type="number"
            value={depositAmount}
            onChange={(e) => setDepositAmount(e.target.value)}
            placeholder="Enter amount"
            required
          />
        </div>

        <button type="submit">Add Deposit</button>
      </form>
    </div>
  );
}

export default MakeDeposit;

