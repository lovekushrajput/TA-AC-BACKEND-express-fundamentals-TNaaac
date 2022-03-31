let express = require('express')
let logger = require('morgan')

let app = express()

app.use(logger('dev'))

app.use('/admin',(req,res,next)=>{
next('Unauthorized')
})

app.get('/',(req,res)=>{
    res.send('Welcome')
})

app.get('/about',(req,res)=>{
    res.send('Welcome to about page')
})

app.use((req,res,next)=>{
    res.send('404 page not found')
})

//error handle middleware
app.use((err,req,res,next)=>{
    res.send(err)
})

app.listen(4000,()=>{
    console.log('server is listening on port 4k')
})