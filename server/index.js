const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

const port = 3000;

app.use(morgan('dev'));
app.use('/rooms/:listingid', express.static(path.resolve(__dirname, '../')));
// app.use('/api/:listingid/booking', express.static(path.resolve(__dirname, '../')));

app.all('/api/:listingid/booking', (req, res) => {
  res.redirect(`http://localhost:3001/api/${req.params.listingid}/booking`);
});

app.all('/api/:listingid/gallery', (req, res) => {
  res.redirect(`http://localhost:3003/api/${req.params.listingid}/booking`);
});

app.all('/api/:listingid/review', (req, res) => {
  res.redirect(`http://localhost:3004/api/${req.params.listingid}/booking`);
});

app.listen(port, () => {
  console.log(`listening on ${port}`)
});
