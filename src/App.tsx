import PatientForm from "./components/PatientForm"
import PationsList from "./components/PationsList"

function App() {

  return (
    <>
      <div className="container mx-auto mt-20">
        <h1 className="font-black text-5xl text-center md:w-2/3 md:mx-auto">
          Seguimiento de paciente {''}
          <span className="text-indigo-700">Veterinaria</span>
        </h1>
          <div className="mt-12 md:flex"> 
            <PatientForm />
            <PationsList />
          </div>
      </div>
    </>
  )
}

export default App
