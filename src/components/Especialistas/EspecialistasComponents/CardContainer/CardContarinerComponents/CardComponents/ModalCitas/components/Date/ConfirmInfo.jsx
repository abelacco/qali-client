import React from 'react'

function ConfirmInfo() {
    return (
        <div className='h-full'>
            <div className='w-full p-1 bg-slate-50 rounded-md'>
                <h3 className='text-base font-semibold'>Ten en consideracion:</h3>
                <br/>
                <ul className=''>
                    <li>- La reunión ya está agendada en tu google calendar!</li>
                    <li>- Asegúrate estar en un ambiente tranquilo y concentrad@</li>
                </ul>
            </div>
            <br/>
            <p className='w-full p-1'>
                Para reprogramar tu cita, deberás hacerlo con 48 horas de anticipación para no perder tu turno, 
                de lo contrario habrá una mora del 50%.<br/>
                Para hacerlo sigue los siguientes pasos:
                <br/>
                <br/>
                Menú {">"} Mi perfil {">"} Historial citas {">"} Reprogramar mi cita
            </p>
            <br/>
            <p className='w-full p-2 bg-slate-50 rounded-md'>
                {"Una vez termines, dirígete a tu perfil > historial citas > para agendar tu control con anticipación, en caso aplique"}        
            </p>
        </div>
    )
}

export default ConfirmInfo;