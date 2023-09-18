const mongoose = require("mongoose");

var productSchema = mongoose.Schema({
    name:String,
    color:String,
    price:Number,
})
//model 7aga a2dar a3mel beha update get delete ....Crud
//model a2der asta5demo y3ny
module.exports= mongoose.model("Product",productSchema);