import React, {useState , useEffect}from 'react'

function AddNewFinancialGoals() {
    const [goals,setGoals] = useState([]);
    const [name, setName] = useState({
        name: "",
        targetAmount: "",
        category: "",
        deadline:"",
    });
    const [editingGoal, setEditingGoal] = useState(null);

    const API_URL = 'https://localhost:5163/goals';

    useEffect(() => {
        fetch(API_URL)
        .then((response) => response.json())
        .then((data) => setGoals(data));
    })

    const handleAddGoal = (e) => {
        e.preventDefault();
        fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(name),
        })
        .then((response) => response.json())
        .then((data) => setGoals([...goals, data]));
    };

    const handleChange = (e) => {
        setName({
            ...name,
            [e.target.name]: e.target.value,
        });
    };

    const handleDelete = (id) => {
        fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
        })
        .then(() => setGoals(goals.filter((goal) => goal.id !== id)));
    };

    const handleEdit = (goal) => {
        setEditingGoal(goal);
        setName({
            name: goal.name,
            targetAmount: goal.targetAmount,
            category: goal.category,
            deadline: goal.deadline,
        });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        fetch(`${API_URL}/${editingGoal.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(name),
        })
        .then(() => {
            setEditingGoal(null);
            setName({
                name: "",
                targetAmount: "",
                category: "",
                deadline: "",
            });
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingGoal) {
            handleUpdate(e);
        } else {
            handleAddGoal(e);
        }
    };

   

  return (
    <div style ={{ padding: '20px',maxwidth: '500px'}}>
        <h2>Add Financial Goals</h2>
        <form onSumbit={handleSubmit}>
            <div>
                <label>Goal Name</label>
                    <input
                        type="text"
                        name="name"
                        value={goals.name}
                        onChange={handleChange}
                        placeholder="Enter goal name"
                        required
                    />
            </div>

            {/* <div>
                <label>Target Name</label>
                    <input
                        type="number"
                        name="targetAmount"
                        value={goals.targetAmount}
                        onChange={handleChange}
                        placeholder="...Eg 1000"
                        required
                />
            </div> */}

            <div>
                <label>Category:</label>
                    <input
                        type="text"
                        name="category"
                        value={goals.category}
                        onChange={handleChange}
                        placeholder="eg savings"
                        required
                />
            </div>

            <div>
                <label>Deadline:</label>
                    <input
                        type="date"
                        value={goals.deadline}
                        name="deadline"
                        onChange={handleChange}
                    />
            </div>

            <button type="submit">
                {editingGoal ? 'Update Goal' : 'Add Goal'}
            </button>
        </form>

        <h3>My Financial Goals</h3>
        <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <strong>{goal.name}</strong> - {goal.category} - KES {goal.targetAmount} by {goal.deadline}
            <br />
            <button onClick={() => handleEdit(goal)}>Edit</button>
            <button onClick={() => handleDelete(goal.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
 export default AddNewFinancialGoals;