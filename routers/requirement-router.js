const express = require('express');
const router = express.Router();
const requirement= require('../controllers/requirement-controller');
const {needSchema} = require('../validators/auth-validator');
const validate = require('../middlewares/validate-middleware');


router.route("/requirement").post(validate(needSchema), requirement);

module.exports = router;
