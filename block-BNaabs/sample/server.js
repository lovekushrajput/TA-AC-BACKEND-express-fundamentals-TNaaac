let express = require('express')

let app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/new',(req,res)=>{
    res.sendFile(__dirname + '/new.html')
})

app.get('/users/:username',(req,res)=>{
    res.send(req.params.username)
})

app.post('/new',(req,res)=>{
   res.send(req.body)
})
app.listen(4000,()=>{
    console.log('server is listening on port 4k')
})