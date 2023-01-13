const express = require('express');
require('express-async-errors');
const swaggerUi = require('swagger-ui-express');
const routes = require('./routes/router');

// ...

const app = express();
const swaggerDocument = require('./swagger.json');

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(routes);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
