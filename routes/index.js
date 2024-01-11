const routes = require('express').Router();

const myConroller = require('../controllers')

routes.get('/', myConroller.awesomeFunction);
routes.get('/awesome', myConroller.returnAnotherPerson);
routes.get('/week1', myConroller.week1Assignment);

module.exports = routes;