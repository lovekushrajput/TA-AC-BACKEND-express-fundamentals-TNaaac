let express = require('express')
let cookieParser = require('cookie-parser')
let logger = require('morgan')

let app = express()

app.use(cookieParser())

app.use(logger('dev'))

app.use((req,res,next)=>{
    res.cookie("username","lovekush")
    next()
})

app.get('/about',(req,res)=>{
res.send('Welcome to express')
})

app.listen(4000,()=>{
    console.log('server is listening on port 4k')
})



