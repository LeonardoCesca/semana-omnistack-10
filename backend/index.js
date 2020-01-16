const express = require('express');

const app = express();


app.use(express.json());

/*
tipos de parametros:

Query Params: ?search=Leo (incorporados e visiveis na URL) , acessiveis através de (req.query ( Filtros, ordenação, paginação, ...)) GET

Route Params: request.params (Identificar um recurso na alteração ou remoção)

Body: request.body ( Dados para criação ou alteração de um registro)

*/


/* Query Params */ 
app.get('/', (request, response) => {
    console.log(request.query);
    return response.json({message: 'Hello Omnistack'})
});

app.listen(3333);

/* Route Params */
app.delete('/users/:id', (request, response) => {
    console.log(request.params);
    return response.json({message: 'Hello Omnistack'})
});

app.listen(3333);

/* Body */
app.post('/users', (request, response) => {
    console.log(request.params);
    return response.json({message: 'Hello Omnistack'})
});

app.listen(3333);