const mongoose = require('mongoose');
const {Schema} = mongoose;

const taskSchema = new Schema({
    text: String,
    isChecked: Boolean
});

const Task = mongoose.model('tasks', taskSchema);

module.exports = Task;