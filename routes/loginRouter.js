const {Router} = require('express');
const users = require('../db/users')


const loginRouter = Router();

loginRouter.get('/', (req, res) => {
    res.render('login');
});

loginRouter.post('/', ({body}, res) => {
    const filterUser = users.some(user => user.email === body.email);

    if (filterUser) {
        const error = `User with this email:${body.email} exists, please try to enter another email!`
        res.render('errorPage', {error});
        return;
    }

    users.push({...body, id: users.length ? users[users.length - 1].id + 1 : 1});
    res.redirect('users');
})

module.exports = loginRouter;