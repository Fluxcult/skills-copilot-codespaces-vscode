// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a comment
app.post('/comments', (req, res) => {
  res.send('Comment created');
});

// Retrieve a comment
app.get('/comments/:id', (req, res) => {
  res.send('Comment retrieved');
});

// Update a comment
app.put('/comments/:id', (req, res) => {
  res.send('Comment updated');
});

// Delete a comment
app.delete('/comments/:id', (req, res) => {
  res.send('Comment deleted');
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});