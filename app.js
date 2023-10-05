const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const expenseRoutes = require('./routes/expenseRoutes');
const sequelize = require('./models/expense');

app.use(bodyParser.json());

// Routes
app.use('/api/expense', expenseRoutes);

// Sync the database schema with the models
sequelize.sync().then(() => {
  console.log('Database synced');
}).catch(err => {
  console.error('Error syncing database:', err);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });