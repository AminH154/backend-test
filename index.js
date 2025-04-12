const express = require('express');
const app = express();
const mangoose = require('mongoose');
app.listen(3000, () =>{
    console.log('Server is running on port 3000');
})

app.get('/',(req,res) => {
    res.send('Hello World gays!')
})
mongoose.connect("mongodb+srv://aminbouallegui0:<db_password>@backenddb.kqjdau1.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB")