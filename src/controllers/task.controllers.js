const Task = require('../models/task/task');
const {
    allTasks,
    newTask,
    updatedTask,
    deletedTask
    } = require('../data/task.data');

// get all tasks
module.exports.allTasks = async (req,res) => {
    try {
        const result = await allTasks();
        res.send({
            result,
        });
    } catch (error) {
        res.status(500)
            .send({
                message: "Internal server error",
                error: "Internal server",
                status: 500,
            });
    }
};

// create a new task
module.exports.newTask = async (req,res) => {
    try {
        if (typeof req.body.text == 'string' && typeof req.body.isChecked == 'boolean') {
            const result = await newTask(req, res);
            res.send({'data': result});
        } else {
            throw {
                message: "Invalid fields type",
                error: "Bad Request",
                status: 400,
            }
        }
    } catch (error) {
        if (error.status == 400) {
          res.status(error.status)
             .send(error);
        } else {
          res.status(500)
             .send({
                message: "Internal server error",
                error: "Internal server",
                status: 500,
             });
        }

    }
};

// update a task
module.exports.updatedTask = async (req,res) => {
    try {
        if (typeof req.body.text == 'string' && typeof req.body.isChecked == 'boolean') {
            const result = await updatedTask(req, res);
            res.send({result});
        } else {
            throw {
                message:"Invalid fields type",
                error: "Bad Request",
                status: 400,
            }
        }
    } catch (error) {
        if (error.status == 400) {
            res.status(error.status)
                .send(error);
        } else {
            res.status(500)
                .send({
                    message: "Internal server error",
                    error: "Internal server",
                    status: 500,
                });
        }
    }
};


// delete a task
module.exports.deletedTask = async (req,res) => {
    try {
        if (req.params.id && req.params.id.length >= 24) {
            const result = await deletedTask(req, res);
            res.send({"data": result});
        } else {
            throw {
                message: "Id not provided",
                error: "Bad Request",
                status: 400,
            }
        }
    } catch (error) {
        if (error.status == 400) {
            res.status(error.status)
               .send(error);
        } else {
            res.status(500)
                .send({
                    message: "Internal server error",
                    error: "Internal server",
                    status: 500,
                });
        }
    }
};
