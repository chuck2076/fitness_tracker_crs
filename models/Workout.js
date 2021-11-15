const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Creating the schema for the workout model
const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [
        {
          type: {type: String},
          name: String,
          duration: Number,
          weight: Number,
          reps: Number,
          sets: Number,
          distance: Number,
        },
      ],
      
  });
  
  const Workout = mongoose.model("Workout", WorkoutSchema);
  
  module.exports = Workout;
  