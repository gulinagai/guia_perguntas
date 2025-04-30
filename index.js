const express = require("express")
const app = express()

app.set('view engine', 'ejs')  // estou dizendo para o express usar o EJS como View Engine

app.get('/:nome/:lang', (req, res)=> {
    let nome = req.params.nome
    let lang = req.params.lang
    let exibirMsg = true

    let jogos = [
        {
            nome: 'League of Legends', 
            personagemFavorito: 'Katarina'
        },
        {
            nome: 'Grand Chase', 
            personagemFavorito: 'Sieghart'
        },
        {
            nome: 'Pokémon', 
            personagemFavorito: 'Dark Lugia'
        },
        {
            nome: 'Valorant', 
            personagemFavorito: 'Jett'
        }
    ]
    
    res.render('index', {
        nome: nome,
        lang: lang,
        empresa: 'GuliX',
        inscritos: 8000,
        msg: exibirMsg,
        jogos: jogos
    })     
})



app.listen(8080, ()=> {
    console.log('App rodando!')
})