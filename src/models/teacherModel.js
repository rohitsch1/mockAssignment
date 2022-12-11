const mongoose= require('mongoose')

const teacherSchema = new mongoose.Schema({
    Email:{
        type:String,
        required:true,
        unique :true
    },
    Password:{
        type: String,
        required: true,
    }
},{timestamps:true})

module.exports = mongoose.model('teacher',teacherSchema)