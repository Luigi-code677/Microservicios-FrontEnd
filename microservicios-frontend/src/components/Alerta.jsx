import React from 'react'

const Alerta = ({alerta}) => {
  return(
    <div className={`${alerta.err ? 'from-red-500 to-red-600': 'from-indigo-500 to-indigo-600'} bg-gradient-to-br text-center p-3 rounded-xl text-white font-bold text-sm`}>
      {alerta.message}
    </div>
  );
}

export default Alerta