const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const Port = process.env.Port || 5000;

const courses = require('./Data/courses.json');

app.get('/',(req,res)=>{
    res.send('course server running');
});

app.get('/courses',(req,res)=>{
    res.send(courses);
});

app.get('/course/:id',(req,res)=>{
    const id = req.params.id;
    const course = courses.find(c => c.id == id);
    if(!course){
        res.send('no data found with id: ',id);
    }
    res.send(course);
})

app.listen(Port, ()=>{
    console.log('server is running on port: ',Port);
});