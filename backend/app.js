const express = require('express');
const cors = require('cors');
const Pizza = require('./Model/pizza.model');
const Ingredient = require('./Model/ingredient.model');
// const 
const app = express();

app.use(cors())
app.use(express.json())

app.get('/pizzas',async (req,res)=>{
    try{
        const pizza=await Pizza.find();
        res.status(200).json(pizza);
    }
    catch(err){
         res.status(500).json({ message: "Error fetching pizzas" });
    }
});

app.get('/ingredients', async (req, res) => {
  try {
    const ingredients = await Ingredient.find();
    res.status(200).json(ingredients);
  } catch (err) {
    res.status(500).json({ message: "Error fetching ingredients" });
  }
});

module.exports = app;
