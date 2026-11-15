const getCourses = (req, res) => {
    res.status(200).json({
        message: "Courses fetched successfully",
        courses: [
            "JavaScript",
            "React",
            "Node.js",
            "Database Management"
        ]
    });
};

module.exports = { getCourses };