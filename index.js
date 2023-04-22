const express=require("express")
const mongoose=require("mongoose")
const usersRoutes=require("./routes/userRoute")
const dotenv=require("dotenv")
dotenv.config()
const app=express()


app.use(express.json())
app.use("/api/user",usersRoutes)
 

const connectDB=async()=>{
    try {
        await mongoose.connect("mongodb+srv://mohamed:mohamed123@cluster0.kn5cfza.mongodb.net/?retryWrites=true&w=majority",
        {useNewUrlParser:true},{ useUnifiedTopology: true },{useCreateIndex:true})
        
        console.log("conected to db")
        
    } catch (error) {
        console.log("failed to connect to db")
        
    }
}

app.listen(3300,()=>{
    console.log("connected to server")
    connectDB()
})