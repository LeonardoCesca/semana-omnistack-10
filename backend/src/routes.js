
/*
tipos de parametros:

Query Params: ?search=Leo (incorporados e visiveis na URL) , acessiveis através de (req.query ( Filtros, ordenação, paginação, ...)) GET

Route Params: request.params (Identificar um recurso na alteração ou remoção)

Body: request.body ( Dados para criação ou alteração de um registro)

*/

const { Router } = require('express');
const routes = Router();

routes.get('/', (request, response) => {
    console.log(request.query);
    return response.json({message: 'Hello Omnistack'})
});

module.exports = routes;