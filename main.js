<<<<<<< HEAD
import { doctors, addDoctor } from './hospitalData.js'

addDoctor('Dr. Lee')
console.log('Updated doctors:', doctors)
=======
// main.js — uses the functions
import { doctors, addDoctor, filterByAge } from './hospitalData.js'

addDoctor('Dr. Martin')
console.log('Updated doctors:', doctors)
console.log('Patients older than 30:', filterByAge(30))
>>>>>>> 2e324c44a65ed53b894e2899f9914df62247aa75
