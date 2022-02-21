const {Router} = require('express');
const users = require('../db/users');

const userRouter = Router();

userRouter.get('/', (req, res) => {
    res.render('users', {users});
});

userRouter.get('/:userId', (req, res) => {
    const {userId} = req.params;
    const user = users.find(user => user.id === +userId);
    if (!user) {
        const error = `User with id: ${userId} is not found!`;
        res.render('errorPage', {error});
        return;
    }
    res.render('user', {user});
});

module.exports = userRouter;