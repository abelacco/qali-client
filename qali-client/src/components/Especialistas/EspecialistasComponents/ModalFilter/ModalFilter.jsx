import React, { useState } from "react";

//PrimeComponents
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
//components
import Precio from "./ModalFilterComponents/Precio";
import Calificacion from "./ModalFilterComponents/Calificacion";
import Disponibilidad from "./ModalFilterComponents/Disponibilidad";
import Distrito from "./ModalFilterComponents/Distrito";
import SubEspecialidad from "./ModalFilterComponents/SubEspecialidad";
import CleanAndSubmit from "./ModalFilterComponents/CleanAndSubmit";


const ModalFilter = () => {

    const [visible, setVisible] = useState(false);

    const filterValues = useState({
        precio: 0,
        disponibilidad: null,
        distrito: "",
        subEspecialidad: "",
        calificacion: false
    })

    return (
        <div className="card flex justify-center">
            <Button icon="pi pi-sliders-h" onClick={() => setVisible(true)} />
            <Dialog header="Filtrar" visible={visible} onHide={() => setVisible(false)}
                style={{ width: '40vw' }} breakpoints={{ '960px': '75vw', '641px': '100vw' }}>
                <div className="px-8 flex flex-col">
                    <h2>Ordenar por:</h2>
                    <Precio filterValues={filterValues} />
                    <Distrito filterValues={filterValues} />
                    <SubEspecialidad filterValues={filterValues} />
                    <div className="flex justify-evenly border-b border-qaliLightGrey">
                        <Calificacion filterValues={filterValues} />
                        <Disponibilidad filterValues={filterValues} />
                    </div>
                    <CleanAndSubmit filterValues={filterValues} />
                </div>
            </Dialog>
        </div>
    )
}

export default ModalFilter;
