const express = require("express");

const app = express();

app.use(express.json());

const PORT = 3000;

let students = [
  {
    id: 1,
    name: "Ali",
    semester: 6,
    department: "Computer Science",
    cgpa: 3.5
  },
  {
    id: 2,
    name: "Sara",
    semester: 4,
    department: "Software Engineering",
    cgpa: 3.8
  }
];

app.get("/", (req, res) => {
  res.json({
    message: "University Student Records API"
  });
});

app.get("/students", (req, res) => {
  res.json(students);
});
app.get("/students/:id", (req, res) => {

  const studentId = parseInt(req.params.id);

  const student = students.find(
    s => s.id === studentId
  );

  if (!student) {
    return res.status(404).json({
      message: "Student not found"
    });
  }

  res.json(student);
});
app.post("/students", (req, res) => {

  const { id, name, semester, department, cgpa } = req.body;

  if (!id || !name || !semester || !department || !cgpa) {
    return res.status(400).json({
      message: "All fields are required"
    });
  }

  const existingStudent = students.find(
    student => student.id === id
  );

  if (existingStudent) {
    return res.status(400).json({
      message: "Student ID already exists"
    });
  }

  const newStudent = {
    id,
    name,
    semester,
    department,
    cgpa
  };

  students.push(newStudent);

  res.status(201).json({
    message: "Student added successfully",
    student: newStudent
  });

});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});