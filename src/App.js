import Day from './components/Day'
import Tabla from './components/Tabla'

import {
  lunes,
  martes,
  miercoles,
  jueves,
  viernes,
  sabado,
  domingo,
} from './util/horarios.js'

import { cantHoras, cabezera } from './util/cantHoras'

function App() {
  return (
    <div className="App">
      <div className="block mb-16">
        <h1 className="text-center text-6xl font-bold mb-10">
          Horarios de Riego
        </h1>
        <Day diaName="Lunes" horary={lunes} />
        <Day diaName="Martes" horary={martes} />
        <Day diaName="Miercoles" horary={miercoles} />
        <Day diaName="Jueves" horary={jueves} />
        <Day diaName="Viernes" horary={viernes} />
        <Day diaName="Sabado" horary={sabado} />
        <Day diaName="Domingo" horary={domingo} />
      </div>
      <div className="print:inline-block">
        <Tabla
          titulo="Tabla de Horas Asignadas"
          cabezera={cabezera}
          elementos={cantHoras}
        />
      </div>
    </div>
  )
}

export default App
