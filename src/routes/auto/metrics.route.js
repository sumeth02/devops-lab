import express from 'express'
const router = express.Router()

const customMetrics = []

router.get('/api/metrics', (req, res) => {
  res.status(200).json({
    uptime: process.uptime(),
    node: process.version,
    timestamp: new Date().toISOString(),
    custom: customMetrics
  })
})

router.post('/api/metrics', (req, res) => {
  const { name, value } = req.body
  if (!name || !value) {
    return res.status(400).json({ error: 'Missing required fields' })
  }
  const newMetric = { id: customMetrics.length + 1, name, value }
  customMetrics.push(newMetric)
  res.status(201).json(newMetric)
})

export default router
