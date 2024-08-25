const Student = require('../models/student');

const getAllStudents = (req, res) => {
  const limit = parseInt(req.query._limit);
  const query = limit ? Student.find().limit(limit) : Student.find();
  query
    .then((students) => {
      res.status(200).json(students);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

const getStudentById = (req, res) => {
  const studentId = req.params.id;

  Student.findById(studentId)
    .then((student) => {
      if (!student) {
        return res.status(404).send('Student not found');
      }
      res.status(200).json(student);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

const postStudent = (req, res, next) => {
  Student.create(req.body).then((student) => {
    res.status(201).send(student);
  });
};

const putStudent = (req, res) => {
  const { id } = req.params;
  const { name, class: studentClass, grades } = req.body;

  Student.findByIdAndUpdate(
    id,
    { name, class: studentClass, grades },
    { new: true }
  )
    .then((updatedStudent) => {
      res.json(updatedStudent);
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
};

const deleteStudent = (req, res) => {
  const studentId = req.params.id;
  Student.findByIdAndDelete(studentId)
    .then((studentId) => {
      if (!studentId) {
        return res.status(404).send(' student not found');
      }
      res.status(200).json(studentId);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

module.exports = {
  getStudentById,
  getAllStudents,
  postStudent,
  putStudent,
  deleteStudent,
};
