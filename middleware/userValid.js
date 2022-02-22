function userValid(req, res, next) {
    const {firstName, lastName, age, city,email, password} = req.body;

    try {

        if (!firstName) {
            throw new Error('First Name is not provided, please try again!');
        }

        if (!lastName) {
            throw new Error('Last Name is not provided, please try again!');
        }

        if (!age) {
            throw new Error('Age is not provided, please try again!');
        }

        if (!city) {
            throw new Error('City is not provided, please try again!');
        }

        if (!email) {
            throw new Error('Email is not provided, please try again!');
        }

        if (!password) {
            throw new Error('Password is not provided, please try again!');
        }

        if (password.length < 6) {
            throw new Error('Password is not valid, please try again!');
        }

        next();

    } catch (error) {
        console.log(error.message);
        res.status(400).send(error.message);
    }
}

module.exports = userValid;