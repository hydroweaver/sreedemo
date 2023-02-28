const express = require('express')

app = express()

app.get('/', (req, res)=>{
    res.send('<b>Hello World ON DIGITAL OCEAN!</b>')
})

app.listen(8080, ()=>{
    console.log('Server is running')
})