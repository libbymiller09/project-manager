const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World! How ya doing?');
});

app.listen(4200, () => {
  console.log('Server listening on port 4200!');
});
