import express from 'express'

import {creatStudents,getStudents,updateStudentById,getStudentById} from '../Controllers/students.controller.js';

const router=express.Router()

//2.API Creat Students
router.post('/create/studts',creatStudents)
router.get('/get/student',getStudents)
//4.API Student by assigned Mentor
router.put('/edited/studns/:id',updateStudentById)
//6.API previously assigned student by mentor Student id:651a7eb504f5d0f9da8790b3
router.get('/get/studentbyment/:id',getStudentById)




export default router;

