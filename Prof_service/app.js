require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const profRoutes = require('./routes/profRoutes');

const app = express();
app.use(bodyParser.json());

const sequelize = require('./config/database');

sequelize.authenticate()
    .then(() => console.log('Connected to SQL Server'))
    .catch(err => console.error('Unable to connect to the database:', err));

app.use('/api/v1/profs', profRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));