const mongoose = require("mongoose");
const { Schema } = mongoose;

const recipeSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  chef: {
    type: String,
    required: true,
    trim: true,
  },
  cuisine: {
    type: String,
    required: true,
    trim: true,
  },
  ingredients: {
    type: String,
    required: true,
    trim: true,
  },
  recipeName: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
  },
  timestamps: {
    type: Date,
    default: Date.now,
  },
});

const Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe;
