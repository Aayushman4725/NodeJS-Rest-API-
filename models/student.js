const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: "string",
    required: true,
  },

  dept: {
    type: "string",
    required: true,
  },

  graduated: {
    type: "boolean",
    required: true,
    default: false,
  },
});

module.exports = mongoose.model("Student", studentSchema);
