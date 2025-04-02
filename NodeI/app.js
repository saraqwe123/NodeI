const http = require("http"); //importando o http, ele que "gera" o servidor 
const assinatura = require("./assinatura") //importando de assinatura.js 

http.createServer(function(reg, res) { //usando o http importado
res.end("hello world \n\n\n" +assinatura()); //resposta geraa
}).listen(8081); //porta onde roda

console.log("servidor rodando..."); //teste