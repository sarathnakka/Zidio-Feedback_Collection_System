const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
    teacherName: String,
    rating: Number,
    review: String
});

const FeedbackModel = mongoose.model("feedback", FeedbackSchema);
module.exports = FeedbackModel;
