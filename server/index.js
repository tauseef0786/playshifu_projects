import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.routes.js"; 
import productRoutes from "./routes/product.routes.js"
import cors from "cors"


dotenv.config();
const app=express();

app.use(express.json());
connectDB();

app.use(cors({
    origin: "*", 
  }));
  
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

const port =process.env.PORT;

app.listen(port,()=>{
    console.log(`server connected on PORT ${port}`)
});