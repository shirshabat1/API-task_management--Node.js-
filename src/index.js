// In src/index.js 
const express = require("express"); 
const v1TicketsRout = require("./v1/routes/ticketsRoute");
const bodyParser = require("body-parser");
const app = express(); 
const PORT = process.env.PORT || 3000; 

app.use(bodyParser.json());
app.use("/api/v1/tickets", v1TicketsRout);

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});