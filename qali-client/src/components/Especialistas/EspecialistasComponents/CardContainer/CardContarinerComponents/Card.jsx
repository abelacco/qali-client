import React from 'react'
import { Button } from 'primereact/button'

function Card({ name, image, speciality, location, price, date,rating }) {
    return (
        <div className='w-64 h-80 bg-slate-600 '>

            <div>{name}</div>
            <div>
                <div>
                    {image}
                </div>
                <div>
                    <h3>{speciality}</h3>
                    <h3>{date}</h3>
                    <h3>{location}</h3>
                    <h3>{price}</h3>
                    {rating}
                </div>
            </div>
            <div>
                <Button label='Ver detalle' />
                <Button label='Sacar cita' />
            </div>


        </div>
    )
}

export default Card