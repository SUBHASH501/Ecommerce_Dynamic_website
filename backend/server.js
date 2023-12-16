const app=require('./app')
const dotenv=require('dotenv');
const connectDatabase=require('./config/database')

//Handlaing Uncaught Exception
process.on("uncaughtException",(err)=>{
    console.log(`Exception : ${err.message}`);
    process.exit(1);
})



//config file path
dotenv.config({path:"backend/config/config.env"});

//connecting to database
connectDatabase()

const server=app.listen(process.env.PORT,()=>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
})


//Unhandeled promise rejection
process.on("unhandledRejection",err=>{
    console.log(`Error : ${err.message}`);
    console.log(`shutting down the server due to unhandled promise rejection`);
    server.close(()=>{
        process.exit(1);
    })
})
