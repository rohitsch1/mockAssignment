const express = require('express')
const router = express.Router()
const controller = require('../controller/allController')

router.get('/test-me',function(req,res){
    res.send("all okay")
})

//register teachers
router.post('/register',controller.teacherRegister)

//login teacher
router.post('/login',controller.login)

//student create 
router.post('/student/:teacherId',controller.studentSubjectMarks)

//get student
router.get('/student/:teacherId',controller.getStudent)








module.exports=router