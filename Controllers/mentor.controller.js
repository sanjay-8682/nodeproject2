import Mentor from "../Models/mentor.schema.js";

export const creatMentor=async(req,res)=>{
     try {
        const mentor= new Mentor(req.body)
        await mentor.save()
        res.status(200).json(mentor)

     } catch (error) {
        res.status(500).json({error:"Error in creat Mentor"})
     }
}

export const getMentor=async(req,res)=>{
     try {
        const mentor = await Mentor.find()
        res.status(200).json(mentor)
        
     } catch (error) {
        res.status(500).json({error:"Error in get Mentor"})

     }
}

export const updateMentorById=async(req,res)=>{
    try {
      const mentId=req.params.id
   const {Name,email,position,Students}=req.body

    const result = await Mentor.updateOne({_id:mentId},{Name,email,position,Students})
    console.log(result);

    if(result.matchedCount===0){
      return res.status(400).json({error:"mentor name not found"})
    }
     
    const updatement=await Mentor.findById(mentId)
    res.status(200).json(updatement)
    } catch (error) {
      res.status(500).json({error:"Error in Update mentor"})
    }
}

export const getMentorById=async(req,res)=>{
 try {
   const mentId=req.params.id

   const mentor = await Mentor.findById(mentId)
   res.status(200).json(mentor)


 } catch (error) {
    res.status(500).json({error:"error in get mentor by id"})
 }    
}

