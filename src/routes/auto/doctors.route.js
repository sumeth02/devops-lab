import express from 'express'

const router = express.Router()

// Starting data for doctors
const doctors = [
  { id: 1, name: 'Dr. Sarah Lee', specialty: 'Cardiology' },
  { id: 2, name: 'Dr. Amir Khan', specialty: 'Pediatrics' }
]

// GET /api/doctors - Retrieve all doctors
router.get('/api/doctors', (req, res) => {
  res.status(200).json(doctors)
})

// POST /api/doctors - Add a new doctor
router.post('/api/doctors', (req, res) => {
  const { name, specialty } = req.body

  // Validate fields
  if (!name || !specialty) {
    return res.status(400).json({ error: 'Name and specialty are required' })
  }

  const newDoctor = {
    id: doctors.length + 1,
    name,
    specialty
  }

  doctors.push(newDoctor)
  res.status(201).json(newDoctor)
})

export default router
