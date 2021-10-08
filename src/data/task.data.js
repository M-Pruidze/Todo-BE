const Task = require('../models/task/task');

module.exports.allTasks = async () => {
  const tasks = await Task.find();
  return tasks;
};

module.exports.newTask = async (req, res) => {
  const task = new Task({
    text: req.body.text,
    isChecked: req.body.isChecked,
  });
  const newTask = await task.save();
  return newTask;
};


module.exports.updatedTask = async (req, res) => {
  const updatedTask = await Task.findOneAndUpdate({_id: req.params.id},{
    text: req.body.text,
    isChecked: req.body.isChecked,
  });
  return updatedTask;
};

module.exports.deletedTask = async (req, res) => {
  const deletedTask = await Task.findByIdAndRemove({_id: req.params.id});
  return deletedTask;
};
