const users = require("../db/users");

class LoginController{

    renderLogin(req, res){
        res.render('login');
    }

    chekLoginUser(req, res){

        const {body} = req;
        const filterUser = users.some(user => user.email === body.email);

        if (filterUser) {
            const error = `User with this email:${body.email} exists, please try to enter another email!`;
            res.render('errorPage', {error});
            return;
        }

        users.push({...body, id: users.length ? users[users.length - 1].id + 1 : 1});
        res.redirect('users');
    }
}

module.exports = new LoginController();