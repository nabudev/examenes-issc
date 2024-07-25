import axios from 'axios'

export const getAllAlumnos= () => {
    return axios.get('http://localhost:8000/alumnos/alumnos/alumnos/')
}

// Para obtener todas las tecnicaturas y profesorados
export const getAllTecProf = () => {
    return axios.get('http://localhost:8000/carreras/carreras/tecprof/')
}

// Para obtener todos los años de carrera
export const getAllAnioCarrera = () => {
    return axios.get('http://localhost:8000/carreras/carreras/aniocarrera/')
}

// Para obtener todas las carreras
export const getAllCarreras = () => {
    return axios.get('http://localhost:8000/carreras/carreras/carreras/')
}

// Para obtener todas las materias
export const getAllMaterias = () => {
    return axios.get('http://localhost:8000/inscripciones/inscripciones/materia/')
}

// Para obtener todos los llamados
export const getAllLlamados = () => {
    return axios.get('http://localhost:8000/inscripciones/inscripciones/llamado/')
}

// Para obtener todas las mesas
export const getAllMesas = () => {
    return axios.get('http://localhost:8000/inscripciones/inscripciones/mesa/')
}

// Para obtener todas las inscripciones
export const getAllInscripciones = () => {
    return axios.get('http://localhost:8000/inscripciones/inscripciones/inscripciones/')
}