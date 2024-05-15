const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
    applicantName: String,
    batchNumber: String,
    projectName: String,
    satisfaction: String,
    improvement: [String],
    suggestions: String
});

const FeedbackModel = mongoose.model("feedback", FeedbackSchema);
module.exports = FeedbackModel;