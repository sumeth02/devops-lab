const hospitalName = 'Central Hospital'
const numberOfDoctors = 12
let isOpen = true
console.log(`Welcome to ${hospitalName}! We have ${numberOfDoctors} doctors currently available.`)
isOpen = false
if (!isOpen) { console.log(`${hospitalName} is now closed.`) }

const doctors = ['Dr. Lee', 'Dr. Khan', 'Dr. Smith', 'Dr. Patel', 'Dr. Garcia']
for (const [index, doctorName] of doctors.entries()) {
  console.log(`Doctor #${index}: ${doctorName}`)
}
doctors.push('Dr. Adams')
console.log(`We now have ${doctors.length} doctors.`)

function findDoctor (name) { return doctors.includes(name) ? 'Doctor found' : 'Doctor not found' }
console.log(findDoctor('Dr. Smith'))
console.log(findDoctor('Dr. House'))

const patient = { name: 'Alice Martin', age: 34, conditions: ['diabetes', 'hypertension'], doctor: { name: 'Dr. Lee', specialty: 'Cardiology' } }
console.log(`Doctor: ${patient.doctor.name}`)
console.log(`Number of conditions: ${patient.conditions.length}`)
console.log(`${patient.name} is treated by ${patient.doctor.name} (${patient.doctor.specialty}).`)
patient.conditions.push('anxiety')
console.log('Updated patient:', patient)

const patients = [{ id: 1, name: 'Alice', age: 34 }, { id: 2, name: 'John', age: 45 }, { id: 3, name: 'Marie', age: 29 }]
function filterByAge (minAge) { return patients.filter(patient => patient.age > minAge) }
function addPatient (name, age) { patients.push({ id: patients.length + 1, name, age }) }
console.log('Patients strictly older than 30:', filterByAge(30))
addPatient('David', 50)
console.log('Updated patients list:', patients)

function createAppointment (doctor, patient, date) {
  if (!doctor || !patient || !date) throw new Error('Missing required fields')
  return { doctor, patient, date }
}
try {
  console.log(createAppointment('Dr. Lee', 'Alice', '2025-03-15'))
  console.log(createAppointment('Dr. Lee'))
} catch (err) {
  console.error('Error:', err.message)
}

function getHospitalData () {
  return new Promise((resolve) => { setTimeout(() => resolve({ name: 'Central Hospital', uptime: 1234 }), 1000) })
}
async function showData () {
  console.log('Fetching hospital data...')
  const data = await getHospitalData()
  console.log('Data loaded:', data)
}
showData()
