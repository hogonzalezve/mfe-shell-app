const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('shell'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/shell/index.html');
});

// Define routes for each microfrontend
app.get('/microfrontend1', (req, res) => {
  // Serve content from S3 bucket
  res.redirect('https://microfront.ambuoglabs.com/mfe-app-1/index.html');
});

app.get('/microfrontend2', (req, res) => {
  // Serve content from S3 bucket
  res.redirect('https://microfront.ambuoglabs.com/mfe-app-2/index.html');
});

app.listen(port, () => {
  console.log(`Shell application is running on http://localhost:${port}`);
});
