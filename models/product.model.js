const mongoose = require("mongoose");
const ProductSchema = mongoose.Schema({
    name : {
        type : String,
        required : [true,"please enter a name "]
    },
    quantity :{
        type : number ,
        required :true,
        default : 0
    },

    price :{
        type : number ,
        required : true,
        default : 0
    },
    image :{
        type : String,
        required : false,
    },
},
    {
        timestamps : true,
    },
    
);
const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;