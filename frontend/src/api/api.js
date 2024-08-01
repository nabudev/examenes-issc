import axios from 'axios'

const inscripcionesApi= axios.create({
    baseURL: "http://localhost:8000/inscripciones/inscripciones/inscripciones/",
})

// Para obtener todas las mesas
export const getAllMesas = () => {
    return axios.get('http://localhost:8000/inscripciones/inscripciones/mesa/')
}

// Para obtener todas las inscripciones
export const getAllInscripciones = () => {
    return axios.get('http://localhost:8000/inscripciones/inscripciones/inscripciones/')
}
export const createInscripcion= (inscripcion) => inscripcionesApi.post("/", inscripcion);
export const deleteInscripcion= (id) => inscripcionesApi.delete(`${id}/`);
export const updateInscripcion= (id, inscripcion) => inscripcionesApi.put(`${id}/`, inscripcion);