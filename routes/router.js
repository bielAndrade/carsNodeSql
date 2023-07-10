const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const carController = require("../controllers/carController");

router.get("/all", (req, res) => carController.getAll(req, res));

router.get("/one/:id", (req, res) => carController.getOne(req, res));

router.post("/new", bodyParser.json(), (req, res) => carController.new(req, res));

router.patch("/update/:id", bodyParser.json(), (req, res) => carController.update(req, res));

router.delete("/delete/:id", (req, res) => carController.delete(req, res));

module.exports = router;