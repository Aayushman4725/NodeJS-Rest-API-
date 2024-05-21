const express = require("express");
const router = express.Router();
const Student = require("../models/student");

router.get("/", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.send("Error: " + err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    res.json(student);
  } catch (err) {
    res.send("Error: " + err);
  }
});

router.post("/", async (req, res) => {
  const students = new Student({
    name: req.body.name,
    dept: req.body.dept,
    graduated: req.body.graduated,
  });

  try {
    const data = students.save();
    res.json(data);
  } catch (err) {
    res.send("Error: " + err);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    student.graduated = req.body.graduated;
    student.name = req.body.name;
    student.dept = req.body.dept;

    const data = await student.save();
    res.json(data);
  } catch (err) {
    res.send("Error: " + err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const student = await Student.findOneAndDelete({ id: req.params.id });

    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.send("Error: " + err);
  }
});

module.exports = router;
