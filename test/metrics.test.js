import request from 'supertest'
import { describe, it, expect } from 'vitest'
import app from '../src/app.js'

describe('Metrics API', () => {
  it('GET /api/metrics returns 200 and metrics', async () => {
    const res = await request(app).get('/api/metrics')
    expect(res.status).toBe(200)
    expect(res.body).toHaveProperty('uptime')
    expect(res.body).toHaveProperty('node')
  })

  it('POST /api/metrics valid returns 201 with id', async () => {
    const res = await request(app)
      .post('/api/metrics')
      .send({ name: 'CPU', value: '40%' })
    expect(res.status).toBe(201)
    expect(res.body).toHaveProperty('id')
  })

  it('POST /api/metrics invalid returns 400', async () => {
    const res = await request(app)
      .post('/api/metrics')
      .send({ name: 'Memory' })
    expect(res.status).toBe(400)
    expect(res.body.error).toBe('Missing required fields')
  })
})
