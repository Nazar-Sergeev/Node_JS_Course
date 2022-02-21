const {Router} = require('express');
const users = require('../db/users');

const singInRouter = Router();

singInRouter.get('/', (req, res) => {
    res.render('singIn');
});

singInRouter.post('/', ({body}, res) => {
    const user = users.find(user => user.email === body.email && user.password === body.password);

    if (!user) {
        const error = `User with this email:${body.email} and passwords:${body.password} doesn't exists, please try again!`
        res.render('errorPage', {error});
        return;
    }

    res.redirect(`/users/${user.id}`);
})

module.exports = singInRouter;