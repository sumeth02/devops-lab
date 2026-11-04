import request from 'supertest'
import app from '../src/app.js'
import { describe, it, expect } from 'vitest'

describe('Appointments API', () => {
  it('GET /api/appointments returns an array', async () => {
    const res = await request(app).get('/api/appointments')
    expect(res.status).toBe(200)
    expect(Array.isArray(res.body)).toBe(true)
  })

  it('POST /api/appointments adds a new appointment', async () => {
    const res = await request(app)
      .post('/api/appointments')
      .send({ doctor: 'Dr. Lee', patient: 'Bob', date: '2026-12-01' })
    expect(res.status).toBe(201)
    expect(res.body).toHaveProperty('id')
    expect(res.body.doctor).toBe('Dr. Lee')
  })

  it('POST /api/appointments with missing fields returns 400', async () => {
    const res = await request(app)
      .post('/api/appointments')
      .send({ doctor: 'Dr. Lee' })
    expect(res.status).toBe(400)
    expect(res.body).toHaveProperty('error')
  })
})
