const express = require('express');
const  { Pool } = require('pg'); // Import the Pool class from the pg module

const Port = process.env.PORT || 3001; // Define the port to listen on, using an environment variable or defaulting to 3001
const app = express(); // Create an instance of the Express application

// Express middleware to parse JSON bodies
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to the PostgreSQL database using a connection pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'BaseballStats_db',
    password: 'password',
    port: 5432, // Default PostgreSQL port
},
console.log('Connected to the BaseballStats_db database!')
)
pool.connect(); // Log a message when connected to the database);


// Set up route for API
// app.get('/api/data', (req, res) => {
//     res.json({ "users": ["userOne", "userTwo", "userThree"] }) // Send a JSON response
// });

// Query the database and send the results as a JSON response
app.get('/api', (req, res) => {
    pool.query('SELECT * FROM BaseballStats', (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            res.json(result.rows);
        }
    });
});


// Start the server and listen on port 3001
app.listen(3001, () => {
    console.log('Server is running on port 3001');
});