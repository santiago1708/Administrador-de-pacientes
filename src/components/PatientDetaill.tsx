import { Patient } from "../types"
import PatientDetaillItem from "./PatientDetaillItem"
import { usePatientStore } from "../store/store"
import {toast} from 'react-toastify'


type PatientProps = {
    patient: Patient
}

export default function PatientDetaill({patient} : PatientProps) {

    const deletepatient = usePatientStore(state => state.deletePatient)
    const getPatientById = usePatientStore(state => state.getPatientById)

    const handleClick = () => {
        deletepatient(patient.id)
        toast.error('Paciente eliminado')
    }

    return (
        <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
            <PatientDetaillItem
                label = 'ID'
                data = {patient.id}
            />
            <PatientDetaillItem
                label = 'Nombre'
                data = {patient.name}
            />
            <PatientDetaillItem
                label = 'Propietario'
                data = {patient.caretaker}
            />
            <PatientDetaillItem
                label = 'Email'
                data = {patient.email}
            />
            <PatientDetaillItem
                label = 'Fecha Alta'
                data = {patient.date.toString()}
            />
            <PatientDetaillItem
                label = 'Sintomas'
                data = {patient.symptoms}
            />

            <div className="flex flex-col lg:flex-row justify-between gap-3 mt.10">
                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                    onClick={() => getPatientById(patient.id)}
                >Editar</button>
                <button
                onClick={handleClick}
                type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                >Eliminar</button>
            </div>
        </div>
    )
}
