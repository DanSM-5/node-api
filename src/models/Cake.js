import {v4 as uuidv4} from 'uuid';

let CAKES = {
    '1': {
        id: '1',
        name: 'Chocolate',
        price: 150,
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
    update: (id, data) => {
      CAKES[id] = {id, ...data};
      return CAKES[id];
    },
    remove: (id) => {
      const {[id]: value, ...otherCakes} = CAKES;
      CAKES = otherCakes
      return otherCakes
    }
};
