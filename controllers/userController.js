const users = require("../db/users");

class UserController {

    renderUsers(req, res) {
        res.render('users', {users});
    }

    getUserById(req, res) {
        const {userId} = req.params;
        const user = users.find(user => user.id === +userId);

        if (!user) {
            const error = `User with this id:${userId} doesn't exists, please try again!`;
            res.render('errorPage', {error});
            return;
        }

        res.render('user', {user});
    }
}

module.exports = new UserController();