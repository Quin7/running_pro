import { Router } from 'express';
import { foods_list } from '../food-data';

const router = Router();

router.get('/', (req,res)=>{
    res.send(foods_list)
});

router.get('/search/:searchTerm', (req,res)=>{
    const searchTerm = req.params.searchTerm;
    const foods = foods_list .filter(food => food.name.toLowerCase()
    .includes(searchTerm.toLowerCase()));
    res.send(foods);
});

router.get('/food/:id', (req,res) => {
    const id = req.params.id;
    const food = foods_list.find(food => food.id == id);
    res.send(food);
});

export default router