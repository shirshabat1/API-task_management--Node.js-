
// business logic and for integrating the data layer and the API routes layer.
const tickets = require("../database/t");
const { v4: uuid } = require("uuid");


const getAllTask= () =>
{
    try{
        return tickets.getAllTask();
    }
    catch(error)
    {
        throw error;
    }
    
}

const getOneTask= (id) =>
{
    try{return tickets.getOneTask(id);
    }
    catch(error)
    {
        throw error;
    }
}

const updateOneTask = (body, id) =>
{
    try{
    tickets.updateOneTask(body, id);}
    catch(error)
    {
        throw error;
    }
};


const deleteOneTask = (id) =>
{
    try{
    tickets.deleteOneTask(id);}
    catch(error)
    {
        throw error;
    }
};

const createNewTask = (createTask) =>
{
    try{
    const task = {
    ...createTask,
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" })
    }
    tickets.createNewTask(task);
    return task;}
    catch(error)
    {
        throw error;
    }
};



module.exports = {getAllTask,
    getOneTask,
    updateOneTask,
    deleteOneTask,
    createNewTask}