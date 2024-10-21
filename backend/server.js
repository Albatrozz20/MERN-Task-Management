const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const TaskModel = require("./models/Tasks");
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://admin:admin1234@crud.ybhca.mongodb.net/crud");

app.post("/create", async (req, res) => {
  TaskModel.create(req.body)
    .then((tasks) => res.json(tasks))
    .catch((err) => res.json(err));
});
app.get("/read", async (req, res) => {
  TaskModel.find()
    .then((tasks) => res.json(tasks))
    .catch((err) => res.json(err));
});

app.get("/getTask/:id", async (req, res) => {
  const id = req.params.id;
  TaskModel.findById({ _id: id })
    .then((tasks) => res.json(tasks))
    .catch((err) => res.json(err));
});
app.put("/update/:id", async (req, res) => {
  const id = req.params.id;
  TaskModel.findByIdAndUpdate(
    { _id: id },
    { title: req.body.title, description: req.body.description })
    .then((tasks) => res.json(tasks))
    .catch((err) => res.json(err));
});

app.delete("/deleteTask/:id", async (req, res) => {
  const id = req.params.id;
  TaskModel.findByIdAndDelete({ _id: id })
    .then((tasks) => res.json(tasks))
    .catch((err) => res.json(err));
});
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is Running on Port ${PORT}`);
});
