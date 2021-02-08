import {v4 as uuidv4} from 'uuid';

const CAKES = {
  '1': {
    id: '1',
    name: 'Chocolate',
    price: 300,
    flavors: ['milk', 'chocolate'],
  },
  '2': {
    id: '2',
    name: 'Carrot',
    price: 300,
    flavors: ['milk', 'carrot'],
  },
};

export default {
  all: () => Object.values(CAKES),
  get: (id) => CAKES[id],
  create: (data) => {
    const newCake = {
      ...data,
      id: uuidv4(),
    };

    CAKES[newCake.id] = newCake;

    return newCake;
  },
};
