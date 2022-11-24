import express from "express";
import cors from "cors";
import jwt from 'jsonwebtoken';
import { foods_list } from "./food-data";
import { sample_users } from "./users";

const app = express();
app.use(express.json());
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
});

app.post('/api/users/login', (req,res) => {
    const { email, password } = req.body;
    const user = sample_users.find(user => user.email === email 
        && user.password === password);
    if(user){
        res.send(generateTokenResponse(user))
    } else {
        res.status(400).send('User not found.!')
    }
});

const generateTokenResponse = (user:any) => {
    const token = jwt.sign({
        email:user.email, isAdmin:user.isAdmin 
    }, "SomeRandomText", {
        expiresIn: '30d'
    });
    user.token = token;
    return user;
}

const port = 5000;
app.listen(port, ()=>{
    console.log('Website served on http://localhost:' + port)
})