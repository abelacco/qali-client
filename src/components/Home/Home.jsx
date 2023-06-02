import React, { useState } from 'react'
import Layout from '../Layouts/LayoutCliente'
import ModalityButtons from './homeComponents/ModalityButtons'
import PlaceAndProfessionalFilter from './homeComponents/PlaceAndSpecialtyFilter'
import SubmitButton from './homeComponents/SubmitButton'

function Home() {

    //informacion que luego sera enviada al back
    const filtersValue = useState({
        modalidad: "",
        speciality: "",
        location: "",
    });

    return (
        <div className='h-screen bg-qaliBlue flex flex-col'>
            <Layout main={'h-full max-w-screen-xl flex m-auto'}>
                <div className='flex flex-col gap-3 flex-grow justify-center max-w-screen-xl'>
                    <h1 className='mb-10 text-qaliLightGrey text-3xl'>
                        Agenda tu cita en pocos segundos
                    </h1>
                    <ModalityButtons filtersValue={filtersValue} />
                    <div className='flex gap-2'>
                        <PlaceAndProfessionalFilter filtersValue={filtersValue} />
                        <SubmitButton filtersValue={filtersValue} />
                    </div>
                </div>
            </Layout>
        </div>
    )

}

export default Home