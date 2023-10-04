import express from 'express'
import { creatMentor,getMentor,updateMentorById,getMentorById } from "../Controllers/mentor.controller.js";

const router=express.Router()

//1.API creat Mentor
router.post('/create/ment',creatMentor) 
router.get('/allment',getMentor)
//3.API assaigned student by one Mentor
router.put('/edit/ment/:id',updateMentorById) 
// 5.API  One Mentor by all asigned styudent mentor Id:651a72b63be324fd5c426132
router.get('/get/mentstud/:id',getMentorById ) 



export default router;

