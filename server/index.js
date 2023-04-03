const cors = require('cors')
const express = require('express')
const mysql = require('mysql')

const app = express()
const port = 3000

app.use(cors())

//createConnection
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

//test polaczenia
app.get('/', (req, res)=>{
    res.send('ok')
})


app.get('/select', (req, res)=>{
    const sql = 'SELECT * FROM glosy'
    con.query(sql, function(err, result, fields){
        if(err) console.log(err)
        else res.send(result)

    })//zapytanie
})

//wyniki danych kandydatów w tablicy
app.get('/k1', (req, res)=>{
    const sql = 'SELECT * FROM glosy WHERE kandydat ="k1"'
    con.query(sql, (err, result, fields)=>{
        if(err) console.log(err)
        else res.send(result)
    })
})
app.get('/k2', (req, res)=>{
    const sql = 'SELECT * FROM glosy WHERE kandydat ="k2"'
    con.query(sql, (err, result, fields)=>{
        if(err) console.log(err)
        else res.send(result)
    })
})
app.get('/k3', (req, res)=>{
    const sql = 'SELECT * FROM glosy WHERE kandydat ="k3"'
    con.query(sql, (err, result, fields)=>{
        if(err) console.log(err)
        else res.send(result)
    })
})



//dodawanie głosu
app.get('/add/:pesel/:wybrany', (req, res)=>{
    const pesel = req.params.pesel
    const wybrany = req.params.wybrany

    const sql = `INSERT INTO glosy (kandydat, pesel) VALUES ('${wybrany}', '${pesel}')`

    con.query(sql, (err, result, filds)=>{
        if(err) console.log(err)
        else res.send(result)
    })
})


app.listen(port)