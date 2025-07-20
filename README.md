# Project Overview

-TheSmart Goal Planner is a user-friendly web application designed to help individuals set, track, and achieve their financial goals effectively. Built with React.js for the frontend, it provides a clean, intuitive interface to manage savings goals, monitor progress through a dynamic dashboard, and make deposits to stay on track.

- For the backend,the application uses js0n-server as lightweight,loacl mock API to store and manage your goals,making it easy to set up and run independently of a complex database.

## Features

  - Responsive Design: Enjoy a seamless experience across various devices, from desktops to mobile phones.
 - Intuitive Navigation: Easily switch between the Home, Dashboard, and Goals sections using the clean navigation bar.
  - Dynamic Dashboard: Get a quick overview of your financial progress, including total goals, completed goals, on-track goals, past-due goals, and total amount saved.
  - Goal Management:
      - Add New Goals: Create new financial goals with details like name, target amount, and target date.
      - Edit Goals: Modify existing goal details as your plans evolve.
     - Delete Goals: Remove goals you no longer need.
      - Make Deposits: Easily add funds to your goals, updating your saved amount and progress in real-time.
- Goal Progress Tracking: Visualize your progress with interactive progress bars for each goal.
  - Pagination: Goals are displayed in manageable sections (4 goals per page) to prevent lengthy scrolling and improve readability.
 -  Status Indicators: Quickly see the status of each goal (Completed, On Track, Warning, Overdue).
  - Modal Forms: Clean and unobtrusive modal pop-ups for adding and editing goals

  ## Technologies Used

  - Frontend:
        React.js: A JavaScript library for building user interfaces.
        React Router DOM: For declarative routing within your Single Page Application (SPA).
        CSS3: For all styling, ensuring a clean and modern UI.
  - Backend (Mock API):
        json-server: A full fake REST API that allows you to quickly set up a local backend with zero coding.

### Installation and setup( local development)

- Follow these steps to get the Smart Goal Planner up and running on your local machine for development.

 #### Prequisities

   -  Node.js (LTS version recommended)
    npm (comes with Node.js)

#### Steps

1. Clone the Repository:

git clone <repository_url>
cd smart-goal-planner

(Replace <repository_url> with the actual URL of your repository.)

2. Set Up the Backend (json-server): Create a db.json file in the root of your project directory. This file will serve as your database.

npm install

(This will install react, react-dom, react-router-dom, etc.)

3. Set Up the Backend (json-server): Create a db.json file in the root of your project directory. This file will serve as your database.

// db.json
"goals": [

    {

      "id": "1",

      "name": "Travel Fund - Japan",

      "targetAmount": 5000,

      "savedAmount": 3200,

      "category": "Travel",

      "deadline": "2025-12-31",

      "createdAt": "2024-01-15"

    },

    {

      "id": "2",

      "name": "Emergency Fund",

      "targetAmount": 10000,

      "savedAmount": 7500,

      "category": "Emergency",

      "deadline": "2026-06-30",

      "createdAt": "2023-05-01"

    },

    {

      "id": "3",

      "name": "New Laptop",

      "targetAmount": 1500,

      "savedAmount": 1500,

      "category": "Electronics",

      "deadline": "2024-07-20",

      "createdAt": "2024-03-10"

    },

    {

      "id": "4",

      "name": "Down Payment - House",

      "targetAmount": 50000,

      "savedAmount": 12000,

      "category": "Real Estate",

      "deadline": "2027-12-31",

      "createdAt": "2024-02-01"

    },

    {

      "id": "5",

      "name": "Car Maintenance",

      "targetAmount": 800,

      "savedAmount": 600,

      "category": "Vehicle",

      "deadline": "2025-09-15",

      "createdAt": "2024-06-01"

    },

    {

      "id": "6",

      "name": "Education Fund",

      "targetAmount": 20000,

      "savedAmount": 5000,

      "category": "Education",

      "deadline": "2028-01-01",

      "createdAt": "2024-04-20"

    },

    {

      "id": "7",

      "name": "Holiday Gifts",

      "targetAmount": 1000,

      "savedAmount": 200,

      "category": "Shopping",

      "deadline": "2024-08-10",

      "createdAt": "2024-07-01"

    },

    {

      "id": "8",

      "name": "New Phone",

      "targetAmount": 1200,

      "savedAmount": 0,

      "category": "Electronics",

      "deadline": "2025-01-31",

      "createdAt": "2024-07-10"

    },
]

- (You can add more sample goals or start with an empty array: "goals": [])

- Start the Backend Server: Open a new terminal window (keep your first terminal open for the React app). Navigate to your project directory and start json-server.

json-server --watch db.json --port 3001

- You should see output indicating that json-server is watching db.json and serving endpoints, typically at http://localhost:5000/goals.

- 
Start the Frontend Development Server: Go back to your first terminal window (where you installed dependencies) and start the React development server.

npm start


  - This will usually open the application in your default web browser at http://localhost:5000.

## Deployment

- The Smart Goal Planner is designed for easy deployment.

 - Frontend (React App on GitHub Pages): The React application can be hosted as a static site directly from your GitHub repository using GitHub Pages. For this to work correctly, ensure your package.json includes the homepage field pointing to your GitHub Pages URL (e.g., "homepage": "https://<your-github-username>.github.io/<your-repo-name>") and the deploy script ("deploy": "gh-pages -d build").

  - Backend (json-server on Render): While json-server is typically used for local development, for demonstration purposes or simple hosting of the mock API, it can be deployed to platforms like Render. You would need to set up a web service on Render, configuring it to run your json-server command (e.g., json-server --watch db.json --port 10000 where 10000 is Render's default port for web services). Remember to update your API_BASE_URL in App.js to point to your deployed Render service's URL.

## Contributing

- Contributions are welcome! If you have suggestions for improvements, new features, or bug fixes, please follow these steps:

    Fork the repository.
    Create a new branch (git checkout -b feature/your-feature-name or bugfix/bug-description).
    Make your changes.
    Commit your changes (git commit -m 'feat: Add new feature').
    Push to the branch (git push origin feature/your-feature-name).
    Open a Pull Request.

- Feel free to reach out to Eddah Kibet via eddahkibet20@gmmail.com

