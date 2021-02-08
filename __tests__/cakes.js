import supertest from 'supertest';
import config from '../config';

import {Cake} from '../src/models';

const request = supertest(`http://localhost:${config.PORT}`);

describe('Cakes controller', () => {
  test('Should respond with all the cakes', (done) => {
    request.
        get('/cakes').
        set('Accept', 'application/json').
        expect('Content-Type', /json/).
        expect(200, Cake.all(), done);
  });

  test('Should respond with the cake that has the id 1', (done) => {
    request.
        get('/cakes/1').
        set('Accept', 'application/json').
        expect('Content-Type', /json/).
        expect(200, Cake.get('1'), done);
  });

  test('Should respond with the new cake', (done) => {
    const newCake = {name: 'red velvet', price: 500, flavors: ['velvet']};

    request.
        post('/cakes').
        send(newCake).
        set('Accept', 'application/json').
        expect('Content-Type', /json/).
        expect(function(res) {
          res.body.id = 'cakeid';
        }).
        expect(201, {id: 'cakeid', ...newCake}, done);
  });
});
