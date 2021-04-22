const fs = require('fs');
const path = require('path');
const express = require('express');
const { animals } = require('./data/animals');

// these two will go to index file as default
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

// for using css and other files for html
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// for using css and other files for html
app.use(express.static('public'));





app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
  