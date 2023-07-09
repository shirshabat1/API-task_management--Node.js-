// define the access to the data and database entities.
const db = require("./data.json");
const { saveToDatabase } = require("./utils/saveToDatabase");


const getAllTask= () =>
{
    try{
        return db.tasks;
    }
    catch(error)
    {
        throw {status: 500, message: error}
    }
    
}

const getOneTask= (id) =>
{
    try{
    const index = db.tasks.findIndex((task) => task.id === id );
    if (index === -1)
    {
        throw {status: 404, error: `Cant find task with the id  ${id} `};
    }
    return db.tasks[index];
    }
    catch(error)
    {
        throw {status: error?.status || 500, message: error?.message || error}
    }

}

const updateOneTask = (body, id) =>
{
    try{
    const index = db.tasks.findIndex((task) => task.id === id );
    if (index === -1)
    {
        throw {status: 404, error: `Cant find task with the id  ${id} `};
    }
    const newDetails = db.tasks[index];
    if (body.name)
    {
        newDetails.name = body.name;
        newDetails.updatedAt =  new Date().toLocaleString("en-US", { timeZone: "UTC" });
    }
    if (body.content)
    {
        newDetails.content = body.content;
        newDetails.updatedAt =  new Date().toLocaleString("en-US", { timeZone: "UTC" });
    }
    db.tasks[index] = newDetails;
    saveToDatabase(db);
}
catch(error)
{
    throw {status: error?.status || 500,  message: error?.message || error};
}

};


const deleteOneTask = (id) =>
{
    try
    {
        const index = db.tasks.findIndex((task) => task.id === id );
        console.log(`index: ${index}`)
        if (index === -1)
        {
            throw {status: 404, error: `Cant find task with the id  ${id} `};
        }
        db.tasks.splice(index, 1);
        saveToDatabase(db);
    }
    catch(error)
{
    throw {status: error?.status || 500,  message: error?.message || error};
}

};

const createNewTask = (createTask) =>
{
    try
    {
    const isAlreadyIn = db.tasks.findIndex((task) => task.name === createTask.name ) > -1;
    if (isAlreadyIn)
    {
        throw {status: 404, error: `Task with name  ${createTask} already exists  `};
    }
    db.tasks.push(createTask);
    saveToDatabase(db);
    return createTask;
    }
    catch(error)
    {
        throw {status: error?.status || 500,  message: error?.message || error};
    }
};



module.exports = {getAllTask,
    getOneTask,
    updateOneTask,
    deleteOneTask,
    createNewTask}