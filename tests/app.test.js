const request = require('supertest');
const app = require('./../app');

describe('App', () => {
    test('should valid assert true', () => {
        expect(true).toBe(true);

    });
});

describe('GET /', () => {
    it('devrait retourner un texte', async () => {
        const res = await request(app)
            .get('/')
            .expect(200);

        expect(res.text).toBe('Coucou!');
    });
});