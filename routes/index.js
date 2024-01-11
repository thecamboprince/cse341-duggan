const routes = require('express').Router();

const myConroller = require('../controllers')

routes.get('/', myConroller.awesomeFunction);
routes.get('/awesome', myConroller.returnAnotherPerson);

module.exports = routes;