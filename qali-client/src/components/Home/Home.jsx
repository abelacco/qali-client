import React, { useState } from 'react'
import Layout from './LayoutCliente'
import ModalityButtons from './homeComponents/ModalityButtons'
import PlaceFilter from './homeComponents/PlaceFilter'

function Home() {

    //informacion que luego sera enviada al back
    const filtersValue = useState({
        modalidad: "",
        especialidad: "",
        ciudad: "",
    })

    return (
        <Layout clase={'h-screen'}>
            <div className='bg-qali-blue h-full'>
                <h1>Agenda tu cita en pocos segundos</h1>
                <ModalityButtons filtersValue={filtersValue}/>
                <PlaceFilter/>

            </div>
        </Layout>
    )
}

export default Home