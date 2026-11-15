const students = [
    {
        id: 1,
        name: "Priya",
        department: "CSE",
        year: 3
    },
    {
        id: 2,
        name: "Divya",
        department: "IT",
        year: 2
    }
];

const getAllStudents = () => {
    return students;
};

module.exports = { getAllStudents };