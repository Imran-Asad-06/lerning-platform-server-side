const express = require('express')
const app = express();
const port = process.env.PORT || 5000;

const catagories = require('./data/catagories.json')

app.get('/',(req,res)=>{
    res.send('online learning API running');
})


app.get('/course-catagories',(req,res)=>{
    res.send(catagories)
})

app.listen(port,()=>{
    console.log('online learning platform server running on port', port)
})