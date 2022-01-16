const Day = ({ diaName, horary }) => {
  return (
    <div>
      <h2 className=" text-3xl font-bold mb-2 ml-8">{diaName}</h2>
      <div className="flex mx-4 ">
        <div className={`text-left `}>00:00</div>
        {horary.map((hora) => (
          <div
            key={`hora-${diaName}-${hora.horaFinal}`}
            className={`text-right ${hora.porcentaje}`}
          >
            {hora.horaFinal}
          </div>
        ))}
      </div>
      <div>
        <span className="flex h-2 overflow-hidden bg-transparent rounded-md outline-none mx-4 ">
          {horary.map((hora) => (
            <span
              key={`span-${diaName}-${hora.horaFinal}`}
              className={`${hora.user.color} ${hora.porcentaje}`}
            ></span>
          ))}
        </span>
        <div className="flex mx-4 ">
          {horary.map((hora) => (
            <div
              key={`name-${diaName}-${hora.horaFinal}`}
              className={`text-center ${hora.porcentaje}`}
            >
              {hora.user.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Day
