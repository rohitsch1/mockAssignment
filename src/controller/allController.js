const teacherModel = require('../models/teacherModel')
const studentModel = require('../models/studentModel')
const jwt = require('jsonwebtoken')

const teacherRegister = async function(req,res){
    let data = req.body
    let saveData = await teacherModel.create(data)
    res.status(201).send({status: true , msg : saveData})

}

const login = async function(req,res){
    let Email = req.body.Email
    let Password= req.body.Password

    let userdataCheck =await teacherModel.findOne({Email:Email , Password:Password})
    if(!userdataCheck) return res.status(404).send({status: false , msg : "teacher is not present with this details"})

    let token = jwt.sign({
        teacherId:userdataCheck._id.toString(),
        Email: userdataCheck.Email
    },"mock-Rohit-Assignment")

    return res.status(200).send({status: true , msg : token})

}

const studentSubjectMarks =async function(req,res){
    try{
        //2 cases
        let {name, marks ,subject} = req.body
        let id=req.params.teacherId

        let findingPair = await studentModel.findOne({name:name , subject :subject,teacherId:id})
        if(findingPair){
            findingPair.marks = findingPair.marks +marks
            findingPair.save()

        }
    
        // same pairs of name and subject ==.> update marks 
        // different pairs then => create student 
        else{
        let document ={
            name :name ,
            subject: subject,
            marks:marks,
            teacherId: req.teacherId
        }

        let saveData = await studentModel.create(document)
        saveData.save()
        return res.status(201).send({status: true , msg : saveData})
    }


    }catch(err){
        console.log({msg : err.message})
    }
}

const getStudent= async function(req,res){
    let id=  req.params.teacherId
    let findingStudents = await studentModel.find({teacherId:id})
    return res.status(200).send({status: true , msg : findingStudents})
}























module.exports={teacherRegister,login,studentSubjectMarks,getStudent}