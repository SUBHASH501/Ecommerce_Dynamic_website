const mongoose=require("mongoose");

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:[true,"Please Enter Product Name"]
    },
    description:{
        type:String,
        trim:true,
        required:[true,"Please Enter Product Description"]
       },
    price:{
        type:Number,
        required:[true,"Please Enter Product Price"],
        maxLength:[8,"Price Connt exceed 8 characters"]
    },
    rating:{
        type:Number,
        default:0
    },
    images:[
        {
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
      }
    ],
    category:{
         type:String,
         required:[true,"Please Enter Product Category"],
    },
    stock:{
        type:Number,
        required:[true,"Please Enter Product Stock"],
        maxlength:[4,"Stock Cannot exceed 4 characters"],
        default:1
    },
    numOfReviews:{
        type:Number,
        default:0,
    },
    reviews:[
        {
            name:{
                type:String,
                required:true,
            },
            rating:{
                type:Number,
                required:true
            },
            comment:{
                type:String,
                required:true,
            }
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now
    }

})

module.exports=mongoose.model("Product",productSchema)