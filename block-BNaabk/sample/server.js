let express = require('express')

let app = express()

app.get('/',(req, res)=>{
    res.send('Welcome on index page')
})

app.listen(3000, ()=>{
    console.log('Server is listening on port 3k')
})