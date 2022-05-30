const Task = require('../models/task');

const createTask = async (req, res) => {
    try {

        const body = req.body;
        const task = new Task(body);
       
        const data = await task.save();

        return res.status(200).json({
            message: "Succesfully create a task for the given User",
            data
        })
    } catch(error) {
        console.log(error);
        return res.status(500).json({
            message: "There was an error!",
            error
        })
    }
}

const getTaskByUser = async (req, res) => {

    const id = req.headers.ownerid

    try {
        const data = await Task.find({ user: id});

        return res.status(200).json({
            message: "Succesfully fetched task for the user",
            data
        })
    } catch(error) {
        return res.status(500).json({
            message: "There was an error!",
            error
        })
    }
}

const deleteTaskByUser = async (req, res) => {

    const taskid = req.headers.taskid
    try {
        const data = await Task.deleteOne({ _id: taskid});
        console.log(data);

        return res.status(200).json({
            message: "Succesfully deleted this task",
        })
    } catch(error) {
        return res.status(500).json({
            message: "There was an error deleting the task!",
            error
        })
    }
}

const updateTaskByUser = async (req, res) => {

    const taskid = req.headers.taskid;
    const newTitle = req.headers.newtitle;
    const newDesc = req.headers.newdesc;

    console.log(req.headers);

    try {
        const updateTitle = await Task.updateOne({ _id: taskid},{ $set: { "title" : newTitle, "description" : newDesc } });
        console.log(updateTitle);

        return res.status(200).json({
            message: "Succesfully updated this task",
        })
    } catch(error) {
        return res.status(500).json({
            message: "There was an error updating the task!",
            error
        })
    }
}

module.exports = {
    // getTasks,
    createTask,
    // getTaskById,
    getTaskByUser,
    deleteTaskByUser,
    updateTaskByUser
}



// --------->> Didn't use it for this project <<---------
// const getTasks = async (req, res) => {
//     try {
//         const data = await Task.find().populate({
//             path: "user"
//         });

//         return res.status(200).json({
//             message: "Succesfully fetched list of tasks",
//             data
//         })
//     } catch(error) {
//         return res.status(500).json({
//             message: "There was an error!",
//             error
//         })
//     }
// }


// --------->> Didn't use it for this project <<---------
// const getTaskById = async (req, res) => {

//     const id = req.params.id;

//     try {
//         const data = await Task.findOne({ _id: id});

//         return res.status(200).json({
//             message: "Succesfully fetched task based on ID",
//             data
//         })
//     } catch(error) {
//         return res.status(500).json({
//             message: "There was an error!",
//             error
//         })
//     }
// }