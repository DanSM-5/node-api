import express from 'express';
import {Cake} from '../models/index.js';

const router = express.Router();

router.get('/', (_, res, ) => {
  try {
    const cakes = Cake.all();

    res.json(cakes);
  } catch (err) {
    res.status(500).json({message: 'Oops something wrong happened'});
  }
});

router.get('/:id', (req, res ) => {
  try {
    const cake = Cake.get(req.params.id);

    if (cake == null){
      res.status(404).json({message: 'Cake not found'});
    }

    res.status(200).json(cake);
  } catch (err) {
    res.status(500).json({message: 'Oops something wrong happened'});
  }
});

router.post('/', (req, res, ) => {
  try {
    const {name = null, price = null, flavors = null} = req.body;

    const cake = Cake.create({name, price, flavors});

    res.status(201).json(cake);
  } catch (err) {
    res.status(500).json({message: 'Oops something wrong happened'});
  }
});

router.put('/:id', (req, res, next) => {
  const cake = Cake.get(req.params.id);

  if (cake == null){
    res.status(404).json({message: 'Cake not found'});
  }

  const body = req.body;

  let updatedCake = {
    name: body.name ? body.name: cake.name,
    price: body.price ? body.price : cake.price,
    flavors: body.flavors ? body.flavors : cake.flavors
  }

  try {
    updatedCake = Cake.update(req.params.id, updatedCake);

    res.json(updatedCake);
  } catch (err) {
    res.status(500).json({message: err.message});
  }
});

router.delete('/:id', (req, res, next) => {
  const cake = Cake.get(req.params.id);

  if (cake == null){
    res.status(404).json({message: 'Cake not found'});
  }

  try {
    Cake.remove(req.params.id)

    res.json({message: 'Caked removed'});
  } catch (err) {
    res.status(500).json({message: err.message});
  }
});

export default router;
