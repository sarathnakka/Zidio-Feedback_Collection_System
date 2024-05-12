const mongoose = require('mongoose');

const teacherFeedbackSchema = new mongoose.Schema({
  studentName: String,
  section: String,
//   rating: Number,
  review: String
});

const TeacherFeedbackModel = mongoose.model('TeacherFeedback', teacherFeedbackSchema);
module.exports = TeacherFeedbackModel;
