const mongoose=require("mongoose")


const db ="mongodb://localhost:27017/Authusers"

mongoose.connect(db,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>console.log("database connected")).catch((error)=>{
    console.log(error)
})