const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static assets like style.css and client-side files directly
app.use(express.static(__dirname));

// Route handlers for your HTML pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/blog', (req, res) => {
  res.sendFile(path.join(__dirname, 'blog.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'contact.html'));
});

app.get('/resources', (req, res) => {
  res.sendFile(path.join(__dirname, 'resources.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});