const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = 3000;

app.use(morgan('dev'));
app.use('/rooms/:listingid', express.static(path.resolve(__dirname, '../')));

app.listen(port, () => {
  console.log(`listening on ${port}`)
});
