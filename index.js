const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const catagories = require('./data/catagories.json')
const course = require('./data/course.json')

app.get('/',(req,res)=>{
    res.send('online learning API running');
})


app.get('/course-catagories',(req,res)=>{
    res.send(catagories)
})

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selectedcourse = course.find(n => n.id === id);
    res.send(selectedcourse);
});

app.listen(port,()=>{
    console.log('online learning platform server running on port', port)
})