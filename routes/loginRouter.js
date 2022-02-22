const {Router} = require('express');
const loginController = require('../controllers/loginController');
const loginCheked = require("../middleware/userValid");

const loginRouter = Router();

loginRouter.get('/', loginController.renderLogin);
loginRouter.post('/', loginCheked, loginController.chekLoginUser);

module.exports = loginRouter;