const {Router} = require('express');
const singInController = require('../controllers/singInController');
const singInValid = require("../middleware/singInValid");

const singInRouter = Router();

singInRouter.get('/', singInController.renderSingIn);
singInRouter.post('/', singInValid, singInController.chekSingInUser);

module.exports = singInRouter;