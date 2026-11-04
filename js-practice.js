// ===== 2.1 Variables and Data Types =====
const hospitalName = 'Central Hospital'
const numberOfDoctors = 12
let isOpen = true

function logStatus () {
  if (isOpen) {
    console.log(`Welcome to ${hospitalName}! We have ${numberOfDoctors} doctors currently available.`)
  } else {
    console.log(`Sorry, ${hospitalName} is currently closed.`)
  }
}

logStatus() // open message
isOpen = false
logStatus() // closed message

// ===== 2.2 Arrays and Loops =====
const doctors = ['Dr. Lee', 'Dr. Khan', 'Dr. Martin', 'Dr. Dubois', 'Dr. Rossi']

// 1. Print each doctor with their number
for (const [index, doctor] of doctors.entries()) {
  console.log(`Doctor #${index + 1}: ${doctor}`)
}

// 2. Add a doctor and print the new count
doctors.push('Dr. Nguyen')
console.log(`Updated number of doctors: ${doctors.length}`)

// 3. Search for a doctor
function findDoctor (name) {
  return doctors.includes(name) ? 'Doctor found' : 'Doctor not found'
}

console.log(findDoctor('Dr. Khan'))
console.log(findDoctor('Dr. House'))
// ===== 2.3 Objects and Nested Data =====
const patient = {
  name: 'Alice Martin',
  age: 34,
  conditions: ['diabetes', 'hypertension'], // array inside the object
  doctor: { name: 'Dr. Lee', specialty: 'Cardiology' } // object inside the object
}
console.log('Doctor name:', patient.doctor.name)
console.log('Number of conditions:', patient.conditions.length)
console.log(`${patient.name} is treated by ${patient.doctor.name} (${patient.doctor.specialty}).`)
patient.conditions.push('anxiety')
console.log('Updated patient:', patient)
// ===== 2.4 Functions and Array Filtering =====
const patients = [
  { id: 1, name: 'Alice', age: 34 },
  { id: 2, name: 'John', age: 45 },
  { id: 3, name: 'Marie', age: 29 }
]

function filterByAge (minAge) {
  return patients.filter((p) => p.age > minAge)
}

function addPatient (name, age) {
  const newPatient = { id: patients.length + 1, name, age }
  patients.push(newPatient)
  return newPatient
}

console.log('Patients older than 30:', filterByAge(30))
addPatient('Paul', 52)
console.log('Updated patient list:', patients)
// ===== 2.6 Error Handling =====
function createAppointment (doctor, patient, date) {
  if (!doctor || !patient || !date) {
    throw new Error('Missing required fields')
  }
  return { doctor, patient, date }
}

try {
  console.log(createAppointment('Dr. Lee', 'Alice', '2026-11-15')) // ✅ works
  console.log(createAppointment('Dr. Lee')) // ❌ throws
} catch (err) {
  console.error('Error:', err.message)
}// ===== 2.7 Asynchronous Code =====
function getHospitalData () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: 'Central Hospital', uptime: 1234 })
    }, 1000)
  })
}

async function showData () {
  console.log('Fetching hospital data...')
  const data = await getHospitalData() // pauses here ~1s
  console.log('Data loaded:', data)
}

showData()
