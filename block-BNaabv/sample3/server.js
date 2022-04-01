let express = require('express')
let logger = require('morgan')
let cookieParser = require('cookie-parser')

let app = express()

// error handler
app.use('/admin',(req,res,next)=>{
 next('Unauthorised user access')
})

app.use(cookieParser())

app.use((req,res,next)=> {
    res.cookie('count', 1)
     next()
})

app.use(logger('dev'))

app.use(express.json())

app.use(express.urlencoded({extended : false}))



app.get('/',(req,res)=>{
    res.send(`<h2>Welcome to express</h2>`)
})

app.get('/about',(req,res)=>{
    res.send('My name is qwerty')
})

app.get('/user/:username',(req,res)=>{
  res.send(  req.params.username )
})

app.post('/form',(req,res)=>{
 res.send( req.body )   
})

app.post('/json',(req,res)=>{
    res.send(JSON.stringify(req.body))
   })

// 404 handler
app.use((req,res,next)=>{
    res.send('404 page not found')
})

// error handler
app.use((err,req,res,next)=>{
    res.statusCode = 500
    res.send(err)
})

app.listen(3000,()=>{
    console.log('server is listening on port 3k')
})