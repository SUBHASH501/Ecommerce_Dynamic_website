const ErrorHandler=require('../utils/errorhandler');

module.exports=(err,req,res,next)=>{
 err.statusCode=err.statusCode || 500;
 err.message= err.message || "Internal server Error";

 //Wrong MongoDB ID error
 if(err.name === "castError"){
     const message=`Resource not found.invalid : ${err.path}`;
     err=new ErrorHandler(message,400);
 }

 res.status(err.statusCode).json({sucess:false,message:err.message});
};

