// hospitalData.js — data + functions
export const doctors = ['Dr. Lee', 'Dr. Khan']

export const patients = [
  { id: 1, name: 'Alice', age: 34 },
  { id: 2, name: 'John', age: 45 },
  { id: 3, name: 'Marie', age: 29 }
]

export function addDoctor (name) {
  doctors.push(name)
}

export function filterByAge (minAge) {
  return patients.filter((p) => p.age > minAge)
}
