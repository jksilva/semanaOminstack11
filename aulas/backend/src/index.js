const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/**
 * Driver: Select * from users
 * Query Builder: table('user').select('*').where()
 */

app.listen(3333);
