const express = require('express');
const app = express();
const port = process.env.PORT || 4200;

app.get('/', (req, res) => {
  res.send('Hello World! How ya doing?');
});

app.listen(port, () => {
  console.log('Server listening on port 4200!');
});
