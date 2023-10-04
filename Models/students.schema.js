import mongoose from 'mongoose';

const studSchema = mongoose.Schema({
    Name:String,
    email:String,
    Place:String,
    Badge:String,
    mentor:String


})

const Students=mongoose.model("Students",studSchema)

export default Students;