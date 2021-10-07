const Task = require('../models/task/task');

module.exports.getTasks = async () => {
  const tasks = await Task.find();
  return tasks;
};

module.exports.createTask = async (req, res) => {
  const task = new Task({
    text: req.body.text,
    isChecked: req.body.isChecked
  });
  const newTask = await task.save();
  return newTask;
};


module.exports.updateTask = async (req, res) => {
  const updatedTask = await Task.findOneAndUpdate({_id: req.params.id},{
    text: req.body.text,
    isChecked: req.body.isChecked
  });
  return updatedTask;
};

module.exports.deleteTask = async (req, res) => {
  const deletedTask = await Task.findByIdAndRemove({_id: req.params.id});
  return deletedTask;
};
