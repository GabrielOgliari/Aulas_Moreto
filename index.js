const { createServer } = require('http');
const express = require('express'); // responsavel get, post delete
const dotenv = require('dotenv');

dotenv.config(); // carrega as variaveis de ambiente

let app = express(); // criacao de servidor express

const http = createServer(app); // criacao de servidor http


// call back é uma funcao que executa após um determinado evendo acontecer ( se tiver algum erro apresenta no console o erro)
process.on('SIGINT', () => http.close((error => {
    if(error){
        console.log(`${error.name}: ${error.message}`);
    }
    process.exit(error ? 1 : 0);
})));

app.get(
    '/',(_, res) => res.send('<h1>Resposta !!!!!!!</h1>')
)

http.listen(process.env.PORT, () => console.log(`Servidor rodando na porta ${process.env.PORT}`)); // servidor ouvindo na porta 3000
