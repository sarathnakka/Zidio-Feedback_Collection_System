const mongoose = require('mongoose');

const teacherFeedbackSchema = new mongoose.Schema({
  applicantName: String,
  batchNumber: String,
  projectName: String,
  satisfaction: String,
  improvement: [String],
  suggestions: String
});

const TeacherFeedbackModel = mongoose.model('TeacherFeedback', teacherFeedbackSchema);
module.exports = TeacherFeedbackModel;
