const express = require('express');
const router = express.Router();
const { registration, userlogin } = require("../controller/usercontroller")
const { createstudent,getstudent,findstudent,updatestudent, deletestudent } = require("../controller/studentcontroller")
const { authentication, authorization } = require("../middleware/auth")

//register API
router.post("/register", registration)
router.post("/login", userlogin)



//student API
//create
router.post("/createstudent/:userid", authentication, authorization, createstudent)

//get Student 
router.get("/getstudent/:userid",getstudent)

//filters for students
router.get("/getstudent",findstudent)

//update student details
router.put("/updatestudent/:userid/:studentid", authentication, authorization, updatestudent)

//delete or remove students
router.delete("/deletestudent/:userid/:studentid", authentication, authorization, deletestudent)





module.exports = router;