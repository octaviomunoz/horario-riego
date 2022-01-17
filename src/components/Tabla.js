const Tabla = ({ titulo, cabezera, elementos }) => {
  return (
    <>
      <h2 className="text-4xl mb-4 text-center">{titulo}</h2>
      <div className="overflow-x-auto  flex justify-center w-full">
        <table className="table-auto w-1/2 print:w-full">
          <thead className=" font-semibold text-neutro-700 bg-slate-100">
            <tr>
              <th>{cabezera.name}</th>
              <th>{cabezera.superficie}</th>
              <th>{cabezera.horas}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {elementos.map((elemento) => (
              <tr>
                <td className="p-2 whitespace-nowrap text-center">
                  {elemento.name}
                </td>
                <td className="p-2 whitespace-nowrap text-center">
                  {elemento.superficie}
                </td>
                <td className="p-2 whitespace-nowrap text-center">
                  {elemento.horas}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Tabla
