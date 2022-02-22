const users = require("../db/users");

class SingInController{

    renderSingIn(req, res){
        res.render('singIn');
    }

    chekSingInUser(req, res){
        const {body} = req;
        const user = users.find(user => user.email === body.email && user.password === body.password);

        if (!user) {
            const error = `User with this email:${body.email} and passwords:${body.password} doesn't exists, please try again!`;
            res.render('errorPage', {error});
            return;
        }

        res.redirect(`/users/${user.id}`);
    }
}

module.exports = new SingInController();
