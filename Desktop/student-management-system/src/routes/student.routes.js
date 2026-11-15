const express = require("express");

const router = express.Router();

const studentController = require("../controllers/student.controller");

router.get("/students", studentController.getStudents);

module.exports = router;