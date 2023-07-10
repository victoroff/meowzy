import supertest from 'supertest' // Import supertest
import server from '../../app' // Import the server object
const requestWithSupertest = supertest(server) // We will use this function to mock HTTP requests

describe('GET "/"', () => {
    test('GET "/" returns all cats', async () => {
        const res = await requestWithSupertest.get('/cats')
        expect(res.status).toEqual(200)
        expect(res.type).toEqual(expect.stringContaining('json'))
        expect(res.body).toEqual([
            {
                id: 1,
                name: 'Whiskers',
                type: 'cat',
                age: 3,
                breed: 'siamese',
            },
            {
                id: 2,
                name: 'Misty',
                type: 'cat',
                age: 2,
                breed: 'persian',
            },
            {
                id: 3,
                name: 'Mittens',
                type: 'cat',
                age: 2,
                breed: 'tabby',
            },
        ])
    })
})

describe('GET "/:id"', () => {
    test('GET "/:id" returns given cat', async () => {
        const res = await requestWithSupertest.get('/cats/1')
        expect(res.status).toEqual(200)
        expect(res.type).toEqual(expect.stringContaining('json'))
        expect(res.body).toEqual(
            {
                id: 1,
                name: 'Whiskers',
                type: 'cat',
                age: 3,
                breed: 'siamese',
            }
        )
    })
})

describe('PUT "/:id"', () => {
    test('PUT "/:id" updates cat and returns it', async () => {
        const res = await requestWithSupertest.put('/cats/1').send({
            id: 1,
            name: 'Whiskerso',
            type: 'cato',
            age: 4,
            breed: 'Russian Blue'
        })
        expect(res.status).toEqual(200)
        expect(res.type).toEqual(expect.stringContaining('json'))
        expect(res.body).toEqual({
            id: 1,
            name: 'Whiskerso',
            type: 'cato',
            age: 4,
            breed: 'Russian Blue'
        })
    })
})

describe('POST "/"', () => {
    test('POST "/" adds new cat and returns the added item', async () => {
        const res = await requestWithSupertest.post('/cats').send({
            name: 'Salame',
            type: 'cat',
            age: 6,
            breed: 'pinky'
        })
        expect(res.status).toEqual(200)
        expect(res.type).toEqual(expect.stringContaining('json'))
        expect(res.body).toEqual({
            id: 4,
            name: 'Salame',
            type: 'cat',
            age: 6,
            breed: 'pinky'
        })
    })
})

describe('DELETE "/:id"', () => {
    test('DELETE "/:id" deletes given cat and returns updated list', async () => {
        const res = await requestWithSupertest.delete('/cats/2')
        expect(res.status).toEqual(200)
        expect(res.type).toEqual(expect.stringContaining('json'))
        expect(res.body).toEqual([
            {
                id: 1,
                name: 'Whiskerso',
                type: 'cato',
                age: 4,
                breed: 'Russian Blue'
            },
            {
                id: 3,
                name: 'Mittens',
                type: 'cat',
                age: 2,
                breed: 'tabby',
            },
            {
                id: 4,
                name: 'Salame',
                type: 'cat',
                age: 6,
                breed: 'pinky'
            }
        ])
    })
})