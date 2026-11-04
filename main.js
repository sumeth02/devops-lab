// main.js — uses the functions
import { doctors, addDoctor, filterByAge } from './hospitalData.js'

addDoctor('Dr. Martin')
console.log('Updated doctors:', doctors)
console.log('Patients older than 30:', filterByAge(30))
