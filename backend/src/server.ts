import express from "express";
import cors from "cors";
import { foods_list } from "./food-data";

const app = express()
app.use(cors({
    credentials: true,
    origin:['http://localhost:4200']
}));

app.get('/api/foods', (req,res)=>{
    res.send(foods_list)
});

app.get('/api/foods/search/:searchTerm', (req,res)=>{
    const searchTerm = req.params.searchTerm;
    const foods = foods_list .filter(food => food.name.toLowerCase()
    .includes(searchTerm.toLowerCase()));
    res.send(foods);
});

app.get('/api/foods/food/:id', (req,res) => {
    const id = req.params.id;
    const food = foods_list.find(food => food.id == id);
    res.send(food);
})

const port = 5000;
app.listen(port, ()=>{
    console.log('Website served on http://localhost:' + port)
})