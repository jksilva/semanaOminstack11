const express = require('express');
const connection = require('./database/connection');

const routes = express.Router();
const OngController = require('./controllers/OngControllers');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

routes.post('/ongs',OngController.store);
routes.get('/ongs', OngController.index);
routes.post('/incidents',IncidentController.store);
routes.get('/incidents',IncidentController.index);
routes.delete('/incidents/:id',IncidentController.delete);
routes.get('/profile', ProfileController.index);
routes.post('/sessions', SessionController.index);

module.exports = routes;