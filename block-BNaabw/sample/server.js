let express = require('express')
let logger = require('morgan')
let cookieParser = require('cookie-parser')

let app = express()

app.use(logger('dev'))

app.use(cookieParser())

app.use((req,res,next)=>{
    res.cookie("username", "xyz")
    next()
})

app.use(express.json())

app.use(express.urlencoded({extended: false}))

app.use(express.static(__dirname + '/public'))

app.use('/admin',(req,res,next)=>{
    next('Unauthorized user acess')
})

// routes
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/projects',(req,res)=>{
    res.sendFile(__dirname + '/projects.html')
})

app.get('/user/:username',(req,res)=>{
    res.send(req.params.username)
})
// custom middlewares
app.use((req,res,next)=>{
    res.send('404 Page Not Found')
})

app.use((err,req,res,next)=>{
    res.statusCode = 500
    res.send(err)
})

app.listen(4000,()=>{
    console.log('server is listening on port 4k')
})