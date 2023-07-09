// responsible to  handling the HTTP requests and HTTP responses.

const ticketsService = require("../services/ticketsService");


const findTask= (req, res)=>
{
   const ask = req.query;
   res.send(ask);     
}


const getAllTickets= (req, res) =>
{
    try{
        const allTickets = ticketsService.getAllTickets();
        res.send(allTickets);
    } catch (error) {
        res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
      }

};

const getOneTask= (req, res) =>
{
    
    const { params: { id },} = req;
    if (!id)
    {
        res.status(404).send({status: "FAILED",data: { error: "Parameter ':workoutId' can not be empty" },}); 
    }
    try{
    const task = ticketsService.getOneTask(id);
    res.status(201).send(task);
    } catch (error) {
    res.status(error?.status || 500)
    .send({ status: "FAILED", data: { error: error?.message || error } });
}
};

const updateOneTask = (req, res) =>
{
    try{
        const {body, params: { id },} = req;
        ticketsService.updateOneTask(body, id);
        res.send({status: "OK", data: req.body});
    }
    catch (error){
    res.status(error?.status || 500)
    .send({ status: "FAILED", data: { error: error?.message || error } });
}
};

const deleteOneTask = (req, res) =>
{
   const {params: {id},}= req;
    if (!id)
    {
        res.status(404)
        .send({
        status: "FAILED",
        data:  { error: "Parameter ':workoutId' can not be empty" },
    }); 
    }
    try{
        ticketsService.deleteOneTask(id);
        res.status(200).send("OK");
    }
    catch (error){
        res.status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const createNewTask = (req, res) =>
{
    const body = req.body;
    if (!body.name || !body.content)
    {
        res.status(400)
        .send({status: "FAILED",data:  { error: "Name and content can't be empty" },
    }); 
    }
    try{
        const createTask = {name: body.name, content: body.content};
        task  =ticketsService.createNewTask(createTask);
        res.status(201).send({ status: "OK", data: {task}});
    }
    catch (error){
        res.status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }

};

// body = {name, content}

module.exports = {getAllTickets,findTask,
getOneTask,
updateOneTask,
deleteOneTask,
createNewTask}