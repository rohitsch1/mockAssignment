const teacherModel = require('../models/teacherModel')
const studentModel = require('../models/studentModel')

const teacherRegister = async function(req,res){
    let data = req.body
    let saveData = await teacherModel.create(data)
    res.status(201).send({status: true , msg : saveData})

}

const login = function(req,res){

}





















module.exports={teacherRegister,login}