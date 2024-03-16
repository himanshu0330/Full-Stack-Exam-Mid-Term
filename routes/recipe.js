const express = require("express");
const Recipe = require("../model/recipeSchema");
const router = express.Router();

router.get("/recipes", async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.render("recipes/index", { recipes });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

router.get("/recipes/:id/edit", async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).send("Recipe not found");
    }
    res.render("../views/partials/recipesIndex.hbs", { recipe });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

router.post("/recipes/:id/edit", async (req, res) => {
  try {
    const { name, chef, cuisine, ingredients, price } = req.body;
    const recipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      { chef, cuisine, ingredients, price },
      { new: true }
    );
    if (!recipe) {
      return res.status(404).send("Recipe not found");
    }
    res.redirect("../views/partials/recipeEdit.hbs");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

router.get("/recipes/:id/delete", async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!recipe) {
      return res.status(404).send("Recipe not found");
    }
    res.redirect("..views/partials/recipesNew.hbs");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
