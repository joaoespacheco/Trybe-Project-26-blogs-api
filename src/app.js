const express = require('express');
const authController = require('./controllers/auth.controller');
const userController = require('./controllers/user.controller');
// ...

const app = express();

app.use(express.json());

app.post('/login', authController.login);

app.post('/user', userController.createUser);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
