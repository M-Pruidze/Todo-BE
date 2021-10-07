const Task = require('../models/task/task');
const { getTasks, createTask, updateTask, deleteTask } = require('../data/task.data');

// get all tasks
module.exports.getTasks = async (req,res) => {
    try {
        const result = await getTasks();
        res.send({
            result,
        });
    } catch (error) {
        res.status(500)
            .send({
            error: error.message
            });
    }
};

// create a new task
module.exports.createTask = async (req,res) => {
    try {
        if (typeof req.body.text == 'string' && typeof req.body.isChecked == 'boolean') {
            const result = await createTask(req, res);
            res.send({'data': result});
        } else {
            console.log("invalid fields");
            throw {
                message: "Invalid fields type",
                error: "Bad Request",
                statusCode: "400",
            }
        }
    } catch (error) {
        if (error.statusCode == "400") {
          res.status(error.statusCode)
             .send(error);
        } else {
          res.status(500).send({error: error.message});
        }

    }
};

// update a task
module.exports.updateTask = async (req,res) => {
    try {
        const result = await updateTask(req, res);
        res.send({result});
    } catch (error) {
        res.status(500).send({error: error.message});
    }
};


// delete a task
module.exports.deleteTask = async (req,res) => {
    try {
        if (req.params.id && req.params.id.length >= 24) {
            const result = await deleteTask(req, res);
            res.send({"data": result});
        } else {
            console.log("invalid fields");
            throw {
                message: "Id not provided",
                error: "Bad Request",
                statusCode: "400",
            }
        }
    } catch (error) {
        console.log(`error`, error)
        if (error.statusCode == "400") {
            res.status(error.statusCode)
               .send(error);
        } else {
            res.status(500).send({error: error.message});
        }
    }
};