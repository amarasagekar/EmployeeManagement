const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  employeeId: {
    tyepe: String,
    require: true,
    unique: true,
  },
  employeeName: {
    tyepe: String,
    require: true,
  },
  designation: {
    tyepe: String,
    required: true,
  },
  joiningDate: {
    tyepe: String,
    required: true,
  },
  dateOfBirth: {
    tyepe: String,
    required: true,
  },
  salary: {
    tyepe: Number,
    required: true,
  },
  activeEmployee: {
    tyepe: Boolean,
    require: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
