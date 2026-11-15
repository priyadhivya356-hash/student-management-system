const studentService = require("../services/student.service");

const getStudents = (req, res) => {
    const data = studentService.getAllStudents();

    res.status(200).json({
        message: "Students fetched successfully",
        data: data
    });
};

module.exports = { getStudents };