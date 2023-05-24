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
        <div className="card flex justify-content-center">
            <Button icon="pi pi-sliders-h" onClick={() => setVisible(true)} />
            <Dialog header="Filtrar por:" visible={visible} onHide={() => setVisible(false)}
                style={{ width: '50vw' }} breakpoints={{ '960px': '75vw', '641px': '100vw' }}>
                <div>
                    <h2>Ordenar por:</h2>
                    <Precio filterValues={filterValues} />
                    <Disponibilidad filterValues={filterValues} />
                    <Distrito filterValues={filterValues} />
                    <SubEspecialidad filterValues={filterValues}/>
                    <Calificacion filterValues={filterValues} />
                </div>
            </Dialog>
        </div>
    )
}

export default ModalFilter;
