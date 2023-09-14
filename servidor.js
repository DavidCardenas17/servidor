const chalk = require('chalk');
const http = require('http');

const puerto = 8080;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'aplication/json');

const respuestaMensaje = {
name: 'David Cardenas',
menssage:'Hola desde el primer servidor'
};    
    res.end(JSON.stringify(respuestaMensaje));
    });

server.listen(puerto, () => {
    console.log(chalk.green(`Servidor operando desde http://localhost:${puerto}/`));
});