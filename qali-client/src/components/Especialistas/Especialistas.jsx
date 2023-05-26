import React from 'react';
import Layout from '../Layouts/LayoutCliente';
import GoBackButton from './EspecialistasComponents/GoBackButton';
import TitleAndFilter from './EspecialistasComponents/TitleAndFilter';
import CardsContainer from './EspecialistasComponents/CardContainer/CardsContainer';

function Especialistas() {
    return (
        <div className='min-h-screen'>
            <Layout main={"max-w-screen-xl flex-grow m-auto flex flex-col gap-6 py-6"}>
                <GoBackButton />
                <TitleAndFilter />
                <CardsContainer />
            </Layout>
        </div>
    )
}

export default Especialistas;