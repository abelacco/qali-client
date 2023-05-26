import React from 'react';
import Layout from '../Layouts/LayoutCliente';
import GoBackButton from './EspecialistasComponents/GoBackButton';
import TitleAndFilter from './EspecialistasComponents/TitleAndFilter';
import CardsContainer from './EspecialistasComponents/CardContainer/CardsContainer';

function Especialistas() {
    return (
        <Layout main={"max-w-screen-xl flex-grow m-auto"}>
            <GoBackButton />
            <TitleAndFilter/>
            <CardsContainer/>
            
        </Layout>
    )
}

export default Especialistas;