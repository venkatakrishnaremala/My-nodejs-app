const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files like styles or JavaScript files
app.use(express.static(path.join(__dirname, 'public')));

// Route for the home page (index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Route for the "about" page (optional)
app.get('/about', (req, res) => {
    res.send('<h2>About Page</h2><p>This is a Node.js app built using Express.</p>');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

// Health check route for cron job
app.get('/healthcheck', (req, res) => {
    res.status(200).send('App is healthy');
});

