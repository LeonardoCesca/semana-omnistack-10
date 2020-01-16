
/*
tipos de parametros:

Query Params: ?search=Leo (incorporados e visiveis na URL) , acessiveis através de (req.query ( Filtros, ordenação, paginação, ...)) GET

Route Params: request.params (Identificar um recurso na alteração ou remoção)

Body: request.body ( Dados para criação ou alteração de um registro)

*/

const { Router } = require('express');
const DevController = require('./controllers/DevController');

const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

module.exports = routes;