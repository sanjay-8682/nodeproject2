import mongoose from 'mongoose';

const mentSchema=mongoose.Schema({
    Name:String,
    email:String,
    position:String,
    Students:String



})

const Mentor=mongoose.model('Mentor',mentSchema)

export default Mentor;


 

//Mentor.inserOne({})
