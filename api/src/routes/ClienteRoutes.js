const express = require('express');
const router = express.Router();

const ClienteController = require('../controller/ClienteController');
// const TaskValidation = require('../middlewares/TaskValidation');
// const MacaddressValidation = require('../middlewares/MacaddressValidation');

router.post('/', ClienteController.create)
// router.put('/:id', TaskController.update)
// router.delete('/:id', TaskController.delete)
// router.put('/:id/:done', TaskController.done)

// router.get('/:id', TaskController.show)

router.get('/filter/all/:cpf', ClienteController.all)
router.get('/', ClienteController.all2)
// router.get('/filter/late/:macaddress', TaskController.late)

// router.get('/filter/month/:vencimento', TaskController.month)

// router.get('/filter/year/:macaddress', TaskController.year)

module.exports = router;