const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const fitnessSchema = new Schema({
  day: {
    type: Date,
  },

  exercises: [
    {
      type: {
        type: String,
        required: "cardio or resistance is required",
      },
      name: {
        type: String,
        required: "name of exercise is required",
      },
      distance: {Number,
        duration: Number,

      weight: Number,

      reps: Number,

      sets: Number,
    },
  ],
});

const Workout = mongoose.model("Workout", fitnessSchema);

module.exports = Workout;
