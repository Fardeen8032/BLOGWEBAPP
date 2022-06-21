const express=require("express");
const app=express();
const dotenv=require("dotenv");
const cors = require("cors");
const mongoose=require("mongoose");
const authRoute=require("./routes/auth");
const postRoute=require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const path= require("path");

dotenv.config();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
mongoose
  .connect(process.env.MONGOURL,{
      useNewUrlParser:true,
      useUnifiedTopology:true,
      useCreateIndex:true,
  })
  .then(console.log("Database connected successfully"))
  .catch((err) => console.log(err));
  const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
      cb(null,"../client/public")
    },
    filename:(req,file,cb)=>{
      cb(null,req.body.name);
    },
  });

   const upload = multer({storage:storage});
   app.post("/api/upload", upload.single("file"), (req,res)=>{
     res.status(200).json("File is been uploaded");
   });

app.use("/auth", authRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);
app.use(express.static("images"));
app.listen("5000",()=>{
    console.log("Backend is running");
});