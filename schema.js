const mongoose = require("mongoose")
const { Schema } = mongoose;
const student = new Schema({
    student_name: String,
    registration_number: String,
    marks: Number,
});

module.exports = mongoose.model("student", student,"StudentDatabase")

