const {Router} = require('express');
const loginRouter = require('./loginRouter');
const userRouter = require('./userRouter');
const singInRouter = require('./singInRouter');

const routes = Router();

routes.use('/login', loginRouter);
routes.use('/users', userRouter);
routes.use('/singIn', singInRouter);

routes.use((req, res) => {
    res.render('errorPage');
});

module.exports = routes;