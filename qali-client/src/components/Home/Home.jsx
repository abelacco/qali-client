import React from 'react'
import Layout from './LayoutCliente'
import FiltrosHome from './homeComponents/FiltrosHome'

function Home() {
    return (
        <Layout clase={'h-screen'}>
            <div className='bg-qali-blue h-full'>

                <h1>Agenda tu cita en pocos segundos</h1>
                <FiltrosHome/>

            </div>
        </Layout>
    )
}

export default Home