import React from 'react'
import { Button } from 'primereact/button'

function TitleAndFilter() {
  return (
    <div>
        <h1>Especialistas en alguna Ciudad</h1>
        <div>
            <p>Filtrar por:</p>
            <Button><i className='pi pi-sliders-h '></i></Button>
        </div>
    </div>
  )
}

export default TitleAndFilter