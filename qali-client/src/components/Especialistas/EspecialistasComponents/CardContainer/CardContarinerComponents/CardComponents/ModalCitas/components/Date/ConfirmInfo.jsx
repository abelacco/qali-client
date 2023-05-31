import React from 'react'

function ConfirmInfo() {
    return (
        <div>
            <h3>Ten en consideracion:</h3>
            <ul>
                <li>La reunión ya está agendada en tu google calendar!</li>
                <li>Asegúrate estar en un ambiente tranquilo y concentrad@</li>
                <li>
                    Para reprogramar tu cita, deberás hacerlo con 48 horas de anticipación para no perder tu turno, 
                    de lo contrario habrá una mora del 50%. Para hacerlo sigue los siguientes pasos:
                    <br/>
                    Menú {">"} Mi perfil {">"} Historial citas {">"} Reprogramar mi cita
                </li>
                <li>{"Una vez termines, dirígete a tu perfil > historial citas > para agendar tu control con anticipación, en caso aplique"}</li>
            </ul>
        </div>
    )
}

export default ConfirmInfo;