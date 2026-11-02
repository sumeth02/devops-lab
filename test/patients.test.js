import request from 'supertest'
import { describe, it, expect } from 'vitest'
import app from '../src/app.js'

describe('Patients API', () => {
  it('GET /api/patients returns an array', async () => {
    const res = await request(app).get('/api/patients')
    expect(res.status).toBe(200)
    expect(Array.isArray(res.body)).toBe(true)
  })

  it('POST /api/patients adds a patient', async () => {
    const res = await request(app)
      .post('/api/patients')
      .send({ name: 'Marie', age: 29 })
    expect(res.status).toBe(201)
    expect(res.body).toHaveProperty('id')
  })

  it('POST /api/patients rejects missing fields', async () => {
    const res = await request(app).post('/api/patients').send({ name: 'Bob' })
    expect(res.status).toBe(400)
    expect(res.body).toHaveProperty('error')
  })
})
