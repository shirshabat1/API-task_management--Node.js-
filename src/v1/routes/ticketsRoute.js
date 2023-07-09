
const express = require("express");
const router = express.Router();
const controller = require("../../controllers/ticketsController");


router.get("/", controller.getAllTickets);
router.get("/:id",controller.getOneTask);
router.post("/", controller.createNewTask);
router.put("/:id", controller.updateOneTask);
router.delete("/:id", controller.deleteOneTask);
router.get("/", controller.findTask);


module.exports = router;