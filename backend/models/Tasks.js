const mongoose = require('mongoose');
const TaskSchema = new mongoose.Schema({
    title: String,
    description: String
});

const TaskModel = mongoose.model("tasks", TaskSchema);
module.exports = TaskModel;
