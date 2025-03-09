import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://FoodCourt:Nithin1ga22cs414v@cluster0.f41iz.mongodb.net/food-del').then(()=>console.log("Database Connected"));
}