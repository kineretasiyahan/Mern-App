const express = require('express')
const personRouter = express.Router();

const personCTRL= require('../Controllers/PersonController');

personRouter.get('/',personCTRL.getPersons)
personRouter.get('/:firstName',personCTRL.getPersonByName)
personRouter.post('/',personCTRL.createPerson)
personRouter.put('/:id',personCTRL.putPerson)
personRouter.delete('/:id',personCTRL.deletePerson)

module.exports=personRouter;