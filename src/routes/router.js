const express = require('express');
const authRouter = require('./auth.router');
const userRouter = require('./user.router');
const categoriesRouter = require('./categories.router');
const postRouter = require('./post.router');

const routers = express.Router();

routers.use('/login', authRouter);

routers.use('/user', userRouter);

routers.use('/categories', categoriesRouter);

routers.use('/post', postRouter);

module.exports = routers;