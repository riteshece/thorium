
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
{
	      name:String,
	    category:String,
	    price:{     // 70 mandatory property
        type:Number,
        default:70},

         }, { timestamps: true });

module.exports = mongoose.model('Product', productSchema)



// product id"622636ea7d36c99616bb4e32


        





