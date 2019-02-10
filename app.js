const express = require('express');
const path = require('path');
// const bodyParser = require('body-parser');
const notFoundController = require('./controllers/404');

// APP
const app = express();

// APP SETTINGS
app.set('view engine', 'ejs');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// MIDDLEWARE
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/admin', adminRoutes); // using "admin" filter
app.use(shopRoutes);
app.get('*', notFoundController.get404);
// HTTP ROUTES

// SERVER LISTENER
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));
