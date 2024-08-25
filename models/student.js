const mongoose = require('mongoose');

const gradeSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  score: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  class: { type: String, required: true },
  grades: [gradeSchema],
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
