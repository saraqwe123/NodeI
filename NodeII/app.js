const express = require('express');
const app = express();
const port = 8086;

app.get('/', (req, res) => {
    res.send('Olá Mundo')
});

app.get('/homepage', (req, res, next) => {
    console.log('Olá Mundo 02')
    next()
}, (req, res) => (
    res.send('Olá mundo 03')
));

app.get('/Ola/:nome/:sobrenome', function(req, res) {
    res.send(`Bem-vindo, ${req.params.nome} ${req.params.sobrenome}`)
});

app.get('/Ola2', function(req, res) {
    const {nome, sobrenome} = req.query
    res.send(`Bem-vindo, ${nome} ${sobrenome}`)
});


app.get('/endereco', function(req, res) {
    fetch(`https://brasilapi.com.br/api/cep/v2/` + '87300-355')
        .then((response) => response.json())
        .then((endereco) => {
            res.send(`Endereco ${endereco.street}`)
    
    }) 
    .catch(error => {
        console.log('erro ao acessar o link')
        res.send('Ops, houve um erro')
    })

})


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}...`);
});


