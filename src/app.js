const express = require('express');
require('express-async-errors');
const routes = require('./routes/router');

// ...

const app = express();

app.use(express.json());

app.use(routes);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
