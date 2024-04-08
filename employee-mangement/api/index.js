const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const port = 8000;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect("mongodb+srv://amar:amar24@cluster0.wf4ye.mongodb.net/", {})
  .then(() => {
    console.log("connected to db");
  })
  .catch((error) => {
    console.log("Error connecting to db", error);
  });

app.listen(port, () => {
  console.log("server is running on port 8000");
});

const Employee = require("./models/employee");
const Attendance = require("./models/attendance");

//endpoint to register a employee
app.post("/addEmployee", async (req, res) => {
  try {
    const {
      employeeName,
      employeeId,
      designation,
      phoneNumber,
      dateOfbirth,
      joiningDate,
      activeEmployee,
      salary,
      address,
    } = req.body;

    //create new employee
    const newEmpoyee = new Employee({
      employeeName,
      employeeId,
      designation,
      phoneNumber,
      dateOfbirth,
      joiningDate,
      activeEmployee,
      salary,
      address,
    });

    await newEmpoyee.save();
    res.status(201).json({message:"Employee saved successfully", employee: newEmpoyee});
  } catch (error) {
    console.log("Error Creating employee", error);
    res.status(500).json({ message: "Failed to add an employee" });
  }
});

// endpoint to fetch all the employee
app.get("/employee", async(req, res) => {
try {
  const employees = await Employee.find();
  res.status(200).json(employees);
} catch (error) {
  res.status(500).json({message:"Failed to retrive the employee"})
}
})