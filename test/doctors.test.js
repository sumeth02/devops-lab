import request from 'supertest'
import { describe, it, expect } from 'vitest'
import app from '../src/app.js'

describe('Doctors API', () => {
  it('GET /api/doctors should return all doctors', async () => {
    const res = await request(app).get('/api/doctors')
    expect(res.status).toBe(200)
    expect(Array.isArray(res.body)).toBe(true)
    expect(res.body.length).toBeGreaterThan(0)
  })

  it('POST /api/doctors should add a new doctor', async () => {
    const newDoc = { name: 'Dr. John Doe', specialty: 'Neurology' }
    const res = await request(app).post('/api/doctors').send(newDoc)
    expect(res.status).toBe(201)
    expect(res.body).toHaveProperty('id')
    expect(res.body.name).toBe(newDoc.name)
    expect(res.body.specialty).toBe(newDoc.specialty)
  })

  it('POST /api/doctors should return 400 if fields are missing', async () => {
    const invalidDoc = { name: 'Dr. Incomplete' }
    const res = await request(app).post('/api/doctors').send(invalidDoc)
    expect(res.status).toBe(400)
    expect(res.body).toHaveProperty('error')
  })
})
