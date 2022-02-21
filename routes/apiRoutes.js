const {Router} = require('express');
const loginRouter = require("./loginRouter");
const userRouter = require("./userRouter");

const routes = Router();

routes.use('/users', userRouter);
routes.use('/login', loginRouter);

module.exports = routes;