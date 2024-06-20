const express=require("express");
const path=require("path");
const multer=require("multer");
const app=express();
const PROT=8080;
//const  upload=multer({dest:"uploads/"})
 const storage=multer.diskStorage({
     destination:function(req, file,cb){
      return cb(null,"./uploads");
     },

     filename:function(req,file,cb){
  return cb(null,`${Date.now()}-${file.originalname}`);
     }
 });
 const upload=multer({storage});


app.set("view engine","ejs");
app.set("views",path.resolve("./views"));
  


app.use(express.urlencoded({extended:false}));

app.get("/",(req,res)=>{
  return res.render("homepage");
});
 
app.post("/upload", upload.single("profileImage"),(req,res)=>{
   console.log(req.body);
   console.log(req.file);
   return  res.redirect("/");
}); 
app.listen(PROT,()=>console.log(`server started at PORT:8080`))