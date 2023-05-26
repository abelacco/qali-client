import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'primereact/button'
import { useEventListener } from 'primereact/hooks';
import InfoHover from './InfoHover';


function Card({ name, image, speciality, location, price, date, rating }) {

    const [hover, setHover] = useState(false);
    const elementRef = useRef(null);

    const [bindMouseEnterListener, unbindMouseEnterListener] = useEventListener({
        target: elementRef,
        type: 'mouseenter',
        listener: () => {
            setHover(true);
        }
    });

    const [bindMouseLeaveListener, unbindMouseLeaveListener] = useEventListener({
        target: elementRef,
        type: 'mouseleave',
        listener: () => {
            setHover(false);
        }
    });

    useEffect(() => {
        bindMouseEnterListener();
        bindMouseLeaveListener();

        return () => {
            unbindMouseEnterListener();
            unbindMouseLeaveListener();
        };
    }, [bindMouseEnterListener, bindMouseLeaveListener, unbindMouseEnterListener, unbindMouseLeaveListener]);

    return (
        <div className='w-64 h-96 bg-slate-600 flex flex-col'>
            <div className='relative' ref={elementRef}>

                <div  >
                    <img src={image} alt="foto" className='h-64' />
                </div>

                {hover ? <InfoHover
                    speciality={speciality}
                    location={location}
                    price={price}
                    date={date}
                    rating={rating}
                /> : null}

            </div>

            <div>{name}</div>

            <div>
                <Button label='Ver detalle' />
                <Button label='Sacar cita' />
            </div>

        </div>
    )
}


export default Card