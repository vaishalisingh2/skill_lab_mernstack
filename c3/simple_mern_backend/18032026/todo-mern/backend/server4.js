const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
    require("dotenv").config();
    const app=express();
    app.use(cors());
    app.use(express.json());
    app.use("/api/todos",require("./routes/TodoRoutes"));
    mongoose.connect(process.env.MONGO_URL).then(()=>{
        app.listen(process.env.PORT,()=>{
            console.log("Server running");
        });
    });
