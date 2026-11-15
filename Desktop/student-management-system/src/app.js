const express = require("express");

const app = express();

const studentRoutes = require("./routes/student.routes");

app.use(express.json());

app.use("/api", studentRoutes);

app.get("/", (req, res) => {
    res.send("Student Management System API");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});