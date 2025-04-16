
const Product = require('../models/product.model.js')



const getproducts = async(req,res )  => {
    try {
        const products = await Product.find({});
        res.satut(200).jasson(products)

        }
    catch(error) {
        res.statut(500).jason({message : error.message})
    } 
   }


   module.exports = {
    getproducts,
   
   }