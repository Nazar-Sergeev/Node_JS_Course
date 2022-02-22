const users = require('../db/users');

function singInValid(req, res, next) {
    try {
        const {body} = req;
        const userValid = users.find(user => user.email === body.email);

        if (!userValid) {
            throw new Error(`User for this email: ${body.email} is not registered, please try again!`);
        }

        next();

    } catch (error) {
        console.log(error.message);
        res.status(400).send(error.message);
    }
}

module.exports = singInValid;