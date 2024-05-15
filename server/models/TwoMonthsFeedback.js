const mongoose = require('mongoose');

const twoMonthsFeedbackSchema = new mongoose.Schema({
  applicantName: {
    type: String,
    required: true
  },
  batchNumber: {
    type: String,
    required: true
  },
  projectName: {
    type: String,
    required: true
  },
  satisfaction: {
    type: String,
    required: true
  },
  improvement: {
    type: [String],
    required: true
  },
  suggestions: {
    type: String,
    required: true
  }
});

const TwoMonthsFeedback = mongoose.model('TwoMonthsFeedback', twoMonthsFeedbackSchema);

module.exports = TwoMonthsFeedback;