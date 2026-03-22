const express = require('express');
const app = express(); // Create an instance of the Express application


// Set up route for API
app.get('/api/data', (req, res) => {
    res.json({ "users": ["userOne", "userTwo", "userThree"] }) // Send a JSON response
});

// Start the server and listen on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});