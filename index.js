const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const Port = process.env.Port || 5000;

app.get('/',(req,res)=>{
    res.send('course server running');
})

app.listen(Port, ()=>{
    console.log('server is running on port: ',Port);
});