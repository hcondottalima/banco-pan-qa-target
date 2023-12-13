const controllers = require('./controllers/controllers'); 
const express = require('express');

const router = express.Router();

// ROTA PARA PEGAR AS ATIVIDADES
router.get('/activities/:activityId', controllers.getActivity);

// ROTA PARA PEGAR AS OFERTAS
router.get('/offers/:offerId', controllers.getOffer);

// ROTA PARA COMBINAR TUDO
router.get('/space-content/', controllers.getAllSpaceContent);

// ROTA PARA COMBINAR TUDO, PORÉM REDUZIDO
router.get('/space-content/simple/:space', controllers.getAllSpaceContentSimplified);


module.exports = router;
