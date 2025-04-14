const express = require("express");
const app = express();
const mongoose = require('mongoose');

const Product = require('./models/product.model');
app.use(express.json());

app.post('/api/products',async  (req,res) =>{
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);

    }
    catch(error) {
        res.status(500).json({message : error.message});
    }
    });
app.get('/api/products/:id', async (req,res) =>{
  try{
    const { id } = req.params;
    const product = await Product.findById(id);
     res.status(200).json(product);
  }
  catch(error){
    res.status(500).json({message : error.message});
  }
})

app.get('/api/products',async (req,res)=> {
  try{
      const products = await Product.find({})
      res.status(200).json(products);
  }catch(error){
    res.status(500).json({message : error.message});
  }
})
app.put('/api/products/:id',async (req,res)=>{
  const { id }= req.params ; 
  const product =await Product.findByIdAndUpdate(id,req.body);
  try{
  if (!product){
    return res.status(404).json({message : "product not found"});
  }
  const updatProduct = await Product.findById(id);
  res.status(200).json(updatProduct);
  }
catch(error){
  res.status(500).json({message : error.message});
};
});





app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/", (req, res) => {
  res.send("Hello World gays!");
});
mongoose.connect('mongodb+srv://aminbouallegui0:qMS27GuBCnfvLrAH@node.xqn764z.mongodb.net/node-API?retryWrites=true&w=majority&appName=node')
  .then(() => console.log('Connected!'))
  .catch(err => console.log(err));