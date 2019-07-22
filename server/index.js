const express = require('express');
const morgan = require('morgan');
const path = require('path');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(morgan('dev'));
app.use('/rooms/:listingid', express.static(path.resolve(__dirname, '../')));

app.get('/api/:listingid/images', (req, res) => {
  axios.get(`http://54.215.150.88/api/${req.params.listingid}/images`)
    .then(({data}) => {
      res.send(data);
    });
});

app.get('/api/:listingid/reviews', (req, res) => {
  axios.get(`http://13.57.195.146/api/${req.params.listingid}/reviews`)
    .then(({data}) => {
      res.send(data);
    });
});

app.get('/api/:listingid/booking', (req, res) => {
  axios.get(`http://13.52.61.34/api/${req.params.listingid}/booking`)
    .then(({data}) => {
    res.send(data);
  });
});

app.get('/listing/amenity/:listingid', (req, res) => {
  axios.get(`http://18.221.218.103/listing/amenity/${req.params.listingid}`)
    .then(({data}) => {
    res.send(data);
  });
});

app.get('/listing/desc/:listingid', (req, res) => {
  axios.get(`http://18.221.218.103/listing/desc/${req.params.listingid}`)
    .then(({data}) => {
    res.send(data);
  });
});

app.get('/rooms/:listingid/:item.png', (req, res) => {
  res.redirect(`https://bedroost-booking-static.s3-us-west-1.amazonaws.com/images/${req.params.item}.png`)
});

app.listen(port, () => {
  console.log(`listening on ${port}`)
});
