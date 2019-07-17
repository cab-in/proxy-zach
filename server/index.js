const express = require('express');
const morgan = require('morgan');
const path = require('path');
const axios = require('axios');
const app = express();

const port = 3000;

app.use(morgan('dev'));
app.use('/rooms/:listingid', express.static(path.resolve(__dirname, '../')));

// Proxy way
// app.get('bundle1.js', (req, res) => {
//   axios.get('http://localhost:3001/bundle.js')
//     .then(({data}) => res.sendFile(data))
//     .catch(err => console.log('axios', err))
// });

app.listen(port, () => {
  console.log(`listening on ${port}`)
});
