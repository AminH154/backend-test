const express = require("express");
const app = express();
const mongoose = require('mongoose');
const Product = require('./models/product.model');

//midleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




//routes
app.use('/api/products',productRoutes);






//create a product

app.post('/api/products',async  (req,res) =>{
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);

    }
    catch(error) {
        res.status(500).json({message : error.message});
    }
    });


//get a product by id
app.get('/api/products/:id', async (req,res) =>{
  try{
    const { id } = req.params;
    const product = await Product.findById(id);
     res.status(200).json(product);
  }
  catch(error){
    res.status(500).json({message : error.message});
  }
});

//update product
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


//connect to MongoDB
mongoose.connect('mongodb+srv://aminbouallegui0:qMS27GuBCnfvLrAH@node.xqn764z.mongodb.net/node-API?retryWrites=true&w=majority&appName=node')
  .then(() => console.log('Connected!'))
  .catch(err => console.log(err));



//suprimer un produit
app.delete('/api/products/:id',async (req,res)=>{
  try{
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product){
      return res.status(404).json({message : "product not found"});
    }
    res.status(200).json({message : "product deleted"});

  }
  catch(error){
    res.status(500).jason({message : error.message});

  }
})