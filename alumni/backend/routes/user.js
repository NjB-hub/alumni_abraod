const express = require('express')
const router = express.Router();

const auth = require('../middleware/auth');

const userCtrl = require('../controllers/user');

router.get('/', userCtrl.getAllUser);
router.get('/:id', auth, userCtrl.getOneUser);  
router.patch('/:id', userCtrl.modifyUser);

module.exports = router;