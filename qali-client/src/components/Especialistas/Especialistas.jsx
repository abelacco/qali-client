import React from 'react';
import Layout from '../Layouts/LayoutCliente';
import GoBackButton from './EspecialistasComponents/GoBackButton';
import TitleAndFilter from './EspecialistasComponents/TitleAndFilter';

function Especialistas() {
    return (
        <Layout >
            <GoBackButton />
            <TitleAndFilter/>
        </Layout>
    )
}

export default Especialistas;