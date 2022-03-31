let express = require('express')
const { dirname } = require('path')
let path = require('path')
let app = express()

app.use(express.json())

app.use(express.urlencoded({extends: false}))

app.use(express.static( __dirname +  '/public'))

app.get('/images',(req,res)=>{
    res.sendFile( __dirname + '/index.html')
})

app.post('/json',(req,res)=>{
console.log(req.body)
})

app.post('/contact',(req,res)=>{
    console.log(req.body)
})

app.listen(5000,()=>{
    console.log('server is listening on port 4k')
})