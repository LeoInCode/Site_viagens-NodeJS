import express from 'express'

import posts from './data/posts.json'

const app = express()
const port = 3000

app.set('views', './src/templates')
app.set('view engine', 'pug')
app.use(express.static('src'));


app.get('/', (req, res) => {
    res.render('index', {
        message: 'Bem vindo ao site!'
    })
})

app.get('/sobre', (req, res) => res.render('sobre'))
app.get('/login', (req, res) => res.render('login'))
app.get('/galeria', (req, res) => res.render('galeria'))

app.get('/posts', (req, res) => res.render('posts', {
    posts
}))


app.listen(port, () => console.log(`App rodando na porta ${port}...`))

