import supertest from 'supertest';

import config from '../config';

const request = supertest(`http://localhost:${config.PORT}`);

describe('Cakes controller', () => {
  test('Should respond with all the cakes', (done) => {
    request.
        get('/cakes').
        set('Accept', 'application/json').
        expect('Content-Type', /json/).
        expect(200, done);
  });

  test('Should respond with the cake that has the id 1', (done) => {
    request.
        get('/cakes/1').
        set('Accept', 'application/json').
        expect('Content-Type', /json/).
        expect(200, done);
  });

  test('Should respond with the new cake', (done) => {
    request.
        post('/cakes').
        send({name: 'red velvet', price: 500, flavors: ['velvet']}).
        set('Accept', 'application/json').
        expect('Content-Type', /json/).
        expect(201, done);
  });
});
