const express = require("express")
const app = express()

app.set('view engine', 'ejs')  // estou dizendo para o express usar o EJS como View Engine

app.get('/', (req, res)=> {
    res.render('index')     // ao invés de utilizar o res.send(), utiliza-se o res.render() e passa o arquivo dentro dos parênteses, não precisa especificar a extensão. É dessa forma que o express fará a renderização do arquivo .ejs
})

app.get('/perfil', (req, res)=> {
    res.render('principal/perfil')
})

app.listen(8080, ()=> {
    console.log('App rodando!')
})