const express = require('express');
const app = express();
const port = 8086;
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');

app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(bodyParser.urlencoded({extend: false}));
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send('Olá Mundo')
});


app.get('/Formulario', function(req, res){
    res.render('formulario');
});

app.post('/cadastrarPostagem', function(req, res){
    //console.log(req.body.titulo);
    //console.log(req.body.conteudo);
    //res.send('UHULLLLL');
    res.render('postagens', ({titulo: req.body.titulo, conteudo: req.body.conteudo}))
});

app.listen(port, () => {
    console.log(`servidor rodando na porta ${port}`);
});
