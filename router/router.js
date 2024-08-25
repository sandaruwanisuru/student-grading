const express = require('express');
const router = express.Router();
const {
  getAllStudents,
  getStudentById,
  postStudent,
  putStudent,
  deleteStudent,
} = require('../controllers/studentController');

router.route('/student').get(getAllStudents);

router.route('/student/:id').get(getStudentById);

router.route('/student').post(postStudent);

router.route('/student/:id').put(putStudent);

router.route('/student/:id').delete(deleteStudent);

module.exports = router;
