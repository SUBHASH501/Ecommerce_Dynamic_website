const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncError=require("../middleware/catchasyncerror");
const ApiFeatures = require("../utils/apifeatures");

//Create Product  --Admin
exports.createProduct = catchAsyncError(async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    sucess: true,
    product,
  });
});

//Get All Products
exports.getAllProducts =catchAsyncError( async (req, res) => {
   
   const apiFeature=new ApiFeatures(Product.find(),req.query)
   .search()
   .filter()

   const products = await apiFeature.query;

  res.status(200).json({
    sucess: true,
    products,
  });
});

//update Product -- Admin
exports.updateProduct = catchAsyncError(async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found",404));
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
      sucess:true,
      product
  })
})

//Delete Product
exports.deleteProducts=catchAsyncError(async(req,res,next)=>{
    const product=await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHandler("Product not found",404));
    }
   
    await product.remove();

    res.status(200).json({
        sucess:true,
        message:"Product Delete successfully"
    })
})

//Get Product Details
exports.getProductDetails=catchAsyncError(async(req,res,next)=>{
  const product=await Product.findById(req.params.id);

  if(!product){
    return next(new ErrorHandler("Product not found",404));
  }

res.status(200).json({
  sucess:true,
  product
})

})
