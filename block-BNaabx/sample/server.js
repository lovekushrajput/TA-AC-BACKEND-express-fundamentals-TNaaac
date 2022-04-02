let express = require('express');
const { json } = require('express/lib/response');

let app = express();

// function logger (req,res,next){
//     console.log(req.method, req.url,new Date())
//     next()
// }
// app.use(logger)
// function json (req,res,next){
//     res.setHeader('Content-Type',"application/json")
//     next()
//     }

// app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.body)
    let data = JSON.parse(req.body)
    res.send(data)
})

// app.post('/',(req,res)=>{
// console.log(req.body)
// })

app.listen(3000,()=>{
    console.log('server is listening on port 4k')
})