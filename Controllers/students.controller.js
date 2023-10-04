import Students from "../Models/students.schema.js";

export const creatStudents=async(req,res)=>{
    try {
        const students= new Students(req.body)
        await students.save()
        res.status(200).json(students)

     } catch (error) {
        res.status(500).json({error:"Error in creat Students"})
     }

}

export const getStudents=async(req,res)=>{
   try {
      const student = await Students.find()
      res.status(200).json(student)
      
   } catch (error) {
      res.status(500).json({error:"Error in get Student"})

   }
}

export const updateStudentById=async(req,res)=>{
   try {
     const studtId=req.params.id
  const {Name,email,Place,Badge,metor}=req.body

   const result = await Students.updateOne({_id:studtId},{Name,email,Place,Badge,metor})
   console.log(result);

   if(result.matchedCount===0){
     return res.status(400).json({error:"student name not found"})
   }
    
   const updatestudt=await Students.findById(studtId)
   res.status(200).json(updatestudt)
   } catch (error) {
     res.status(500).json({error:"Error in Update student"})
   }
}

export const getStudentById=async(req,res)=>{
   try {
     const studentId=req.params.id
  
     const student = await Students.findById(studentId)
     res.status(200).json(student)
  
  
   } catch (error) {
      res.status(500).json({error:"error in get mentor by id"})
   }    
  }