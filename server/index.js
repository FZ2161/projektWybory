const cors = require('cors')
const express = require('express')
const mysql = require('mysql')

const app = express()
const port = 3000

app.use(cors())


var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'głosowanie'
})

con.connect(function(err) {
    if(err) console.log(err)
    else console.log('polaczono z db')
})

app.get('/', (req, res)=>{
    res.send('ok')
})


app.listen(port)