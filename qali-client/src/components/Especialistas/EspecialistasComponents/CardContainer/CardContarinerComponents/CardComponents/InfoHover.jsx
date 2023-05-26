import React from 'react'
import { Rating } from 'primereact/rating';

function InfoHover({ speciality, date, location, price, rating }) {
    return (
        <div className='absolute top-0 left-0 w-64 h-64 py-6 px-4 bg-qaliHover text-white flex flex-col gap-3 rounded-t-xl'>
            <h3><i className='pi pi-briefcase text-qaliGreen text-2xl mr-2' />{speciality}</h3>
            <h3><i className='pi pi-clock text-qaliGreen text-2xl mr-2' />{date}</h3>
            <h3><i className='pi pi-map-marker text-qaliGreen text-2xl mr-2' />{location}</h3>
            <h3><i className='pi pi-dollar text-qaliGreen text-2xl mr-2' />Desde S/{price}</h3>
            <div className='flex gap-2 justify-center'>
                <Rating value={rating} cancel={false} className='ratingCard self-center ' />
                <p>{rating}/5</p>
            </div>
        </div>
    )
}

export default InfoHover