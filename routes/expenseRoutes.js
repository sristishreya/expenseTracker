const path = require('path');
const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController')

router.get('/create', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/create.html'));
  });

router.get('/',expenseController.getAllExpense);

router.post('/',expenseController.createExpense);
router.get('/:id',expenseController.getExpenseById);
router.put('/:id',expenseController.updateExpense);
router.delete('/:id',expenseController.deleteExpense);

module.exports = router;
