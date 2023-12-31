const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/db');
const cors = require('cors')

const userAuth = require('./routes/userAuth')
const createEmployee = require('./routes/createUser')

const app = express();
const port = 3001;

// Middleware
app.use(bodyParser.json());
app.use(cors())

//path for all routes
app.use('/userAuth',userAuth)
app.use('/createUser',createEmployee)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});