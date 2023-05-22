import React, { useState } from 'react'
import Layout from './LayoutCliente'
import ModalityButtons from './homeComponents/ModalityButtons'
import PlaceAndProfessionalFilter from './homeComponents/PlaceAndSpecialtyFilter'
import SubmitButton from './homeComponents/SubmitButton'

function Home() {

    //informacion que luego sera enviada al back
    const filtersValue = useState({
        modalidad: "",
        especialidad: "",
        ciudad: "",
    });

    return (
        <Layout main={'h-full flex flex-col justify-center items-center'} contenedor={'bg-qali-blue h-screen flex flex-col'}>
            <div className='flex flex-col gap-3 flex-grow justify-center '>
                <h1 className='mb-10 text-qali-light-grey text-3xl'>
                    Agenda tu cita en pocos segundos
                </h1>
                <ModalityButtons filtersValue={filtersValue} />
                <div className='flex gap-2'>
                    <PlaceAndProfessionalFilter filtersValue={filtersValue} />
                    <SubmitButton filtersValue={filtersValue} />
                </div>
            </div>
        </Layout>
    )
    
}

export default Home