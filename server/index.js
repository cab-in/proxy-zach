require('newrelic');
const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
const port = 3001;

app.get('/loaderio-fb9dbee3961123e648bf6ea3261a1e60', (req, res) => {
  res.sendFile(path.join(__dirname,'loaderio-fb9dbee3961123e648bf6ea3261a1e60.txt'));
})

app.use('/:listingid', express.static(path.resolve(__dirname, '../')));

// app.get('/:listingid/images', (req, res) => {
//   axios.get(`http://54.215.150.88/api/${req.params.listingid}/images`)
//     .then(({data}) => {
//       res.send(data);
//     });
// });
app.get('/', (req, res) => {
  res.redirect('/1');
})

app.get('/:listingid/reviews', (req, res) => {
  axios.get(`http://54.165.210.31/${req.params.listingid}/reviews`)
    .then(({data}) => {
      res.send(data);
    });
});

// app.get('/:listingid/booking', (req, res) => {
//   axios.get(`http://13.52.61.34/api/${req.params.listingid}/booking`)
//     .then(({data}) => {
//     res.send(data);
//   });
// });

// app.get('/listing/amenity/:listingid', (req, res) => {
//   axios.get(`http://18.221.218.103/listing/amenity/${req.params.listingid}`)
//     .then(({data}) => {
//     res.send(data);
//   });
// });

// app.get('/listing/desc/:listingid', (req, res) => {
//   axios.get(`http://18.221.218.103/listing/desc/${req.params.listingid}`)
//     .then(({data}) => {
//     res.send(data);
//   });
// });

// app.get('/rooms/:listingid/:item.png', (req, res) => {
//   res.redirect(`https://bedroost-booking-static.s3-us-west-1.amazonaws.com/images/${req.params.item}.png`)
// });

app.listen(port, () => {
  console.log(`listening on ${port}`)
});
