const { createServer } = require('http');
const express = require('express'); // responsavel get, post delete
const dotenv = require('dotenv'); // responsavel por carregar as variaveis de ambiente
const bodyParser = require('body-parser'); // responsavel por pegar os dados do corpo da requisicao

dotenv.config(); // carrega as variaveis de ambiente
let app = express(); // criacao de servidor express
const http = createServer(app); // criacao de servidor http

//toda vez que o servidor receber uma requisicao, para json
app.use(bodyParser.json()); // para pegar os dados do corpo da requisicao

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
// quando quer que seja pedido algo para o servidor e ele devolve algo 
app.post('/', function(req, res) {
    const nome = req.body.nome; // pegu o que está no body da requesição
    res.send(`Olá ${nome}!`); // responde a requisição
})

http.listen(process.env.PORT, () => console.log(`Servidor rodando na porta ${process.env.PORT}`)); // servidor ouvindo na porta 3000
