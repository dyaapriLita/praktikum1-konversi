import React from 'react'
import Biner from './konversi/biner'
import Desimal from './konversi/desimal'
import Hexadesimal from './konversi/hexadesimal'
import Oktal from './konversi/oktal'

function App() {
  return (
    <div>
      <div className='pt-3 pb-3'>
        <Biner />
      </div>
      <div className='pt-3 pb-3'>
        <Desimal />
      </div>
      <div className='pt-3 pb-3'>
        <Oktal />
      </div>
      <div className='pt-3 pb-3'>
        <Hexadesimal />
      </div>
    </div>
  )
}

export default App

