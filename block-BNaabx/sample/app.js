let express = require('express')
let qs = require('querystring')
let app = express()

function logger (req,res,next){
console.log(req.method ,req.url)
next();
}

function json (req,res,next){
    let store = '';
    req.on('data',(chunks)=>{
       store += chunks;
    })

    req.on('end',()=>{
    req.body = JSON.parse(store)
    next();
    })
    
}

function static (req,res,next){
    let store = '';
    req.on('data',(chunks)=>{
       store += chunks;
    })

    req.on('end',()=>{
    req.body = store
    next();
    })
    
}




app.use(logger);
app.use(json);
app.use(static)


app.get('/',(req,res)=>{
    res.send('Welcome')
})


app.post('/',(req,res)=>{
    res.send(req.body)
})

app.listen(4000,()=>{
    console.log('server is listening on port 4k')
})