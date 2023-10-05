const Expense=require('../models/expense')
exports.createExpense=(req,res)=>{
    Expense.create(req.body)
    .then(expense =>{
        res.status(201).json(expense);
    })
    .catch(error => {
        res.status(400).json({ error: 'Expense creation failed' });
      });
};

exports.getAllExpense=(req,res)=>{
    Expense.findAll()
    .then(expense =>{
        res.status(200).json(expense);
    })
    .catch(error => {
        res.status(500).json({ error: 'Eroor fetching details' });
      });
}

exports.getExpenseById = (req, res) => {
    const { id } = req.params;
  
    Expense.findByPk(id)
      .then(expense => {
        if (!expense) {
          res.status(404).json({ error: 'Expense not found' });
        } else {
          res.status(200).json(expense);
        }
      })
      .catch(error => {
        res.status(500).json({ error: 'Error fetching expense by id' });
      });
  };

  exports.updateExpense = (req, res) => {
    const { id } = req.params;
    const updatedExpense = req.body;
  
    Expense.findByPk(id)
      .then(expense => {
        if (!expense) {
          res.status(404).json({ error: 'Expense not found' });
        } else {
          return expense.update(updatedExpense);
        }
      })
      .then(updatedExpense => {
        res.status(200).json(updatedExpense);
      })
      .catch(error => {
        res.status(500).json({ error: 'Expense update failed' });
      });
  };

  exports.deleteExpense = (req,res) =>{
    const {id} = req.params;
    Expense.findByPk(id)
    .then(expense => {
        if (!expense) {
            res.status(404).json({ error: 'Expense not found' });
          } else {
            return expense.destroy();
          }
        })
        .then(() => {
            res.status(204).send();
          })
          .catch(error => {
            res.status(500).json({ error: 'Expense deletion failed' });
          });
  }