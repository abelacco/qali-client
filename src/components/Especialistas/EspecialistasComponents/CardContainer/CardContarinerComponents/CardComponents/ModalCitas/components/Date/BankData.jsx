import React, { useEffect } from "react";
import Product from "../../../../../../../../MercadoPago/mercadopago.jsx" ;
        

function BankData({ stateButtonsPage, formik }) {

    const [buttonsPage, setButtonsPage] = stateButtonsPage;
    const {date, hour, duration, modality} = formik.values.turn;
    const { pay } = formik.values;
    const {id} = formik.values.id;
    
    useEffect(()=>{
        setButtonsPage({...buttonsPage, nextPage: pay});
    },[])
    const endTimeCalculator = (startTime, duration)=>{
        //Esta funcion calcula el horario de finalización del turno en función de la hora de inicio 
        // en el formato (hh:mm) y la duración del turno en minutos (Ej.: 130m, 30m, 60m)
        duration = duration.slice(0,duration.length-1);
        duration = parseInt(duration);
        const durationh = Math.trunc(duration / 60);
        const durationm = duration-(durationh * 60);
        const startTimeh = parseInt(startTime.split(":")[0]);
        const startTimem = parseInt(startTime.split(":")[1]);
        let endTimem = (durationm + startTimem) - Math.trunc((durationm + startTimem)/60)*60;
        let endTimeh = startTimeh + Math.trunc((durationm + startTimem)/60) + durationh;
        return `${endTimeh}:${endTimem}`
    } 
    const data = {
        amount: 13,
        doctorId: id,
        patientId: "wervwervwerv",
        startDate: `${date}T${hour}`,
        endDate: `${date}T${endTimeCalculator(hour, duration)}`,
    } 
    return (
        <div className="flex flex-col justify-center items-center w-full h-full bg-slate-50 rounded-md">
            <div className="w-full h-1/3 bg-slate-200 rounded-md">
                <p className="p-1">{`Por favor realice el pago de $${data.amount} para agendar su cita`} </p>
                <p className="p-1">Al hacer click en el boton "Pagar" será redirigido a la plataforma de Mercado Pago para realizar su pago.</p>
                <p className="p-1">Luego podrá continuar con el paso de 4 para confirmar su cita</p>
            </div>
            <div className="w-full mt-2 p-1 bg-slate-200 rounded-md font-medium">
                <p>{`Su cita será el día ${date} a las ${hour} de forma ${modality}.`}</p>
            </div>
            <div className="flex justify-center items-center w-full h-2/3">
                <Product items={data}/>  
            </div>           
        </div>
    )
}

export default BankData;