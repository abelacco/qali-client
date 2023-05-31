import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'primereact/button'
import { useEventListener } from 'primereact/hooks';
import InfoHover from './CardComponents/InfoHover';
import ModalCitas from './CardComponents/ModalCitas/ModalCitas';


function Card({ name, image, speciality, location, price, date, rating, id }) {

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
        <div className='w-64 h-96 border border-qaliLightGrey shadow-md hover:transition-transform hover:scale-105 duration-500 flex flex-col rounded-xl'>
            <div className='relative' ref={elementRef}>

                <div  >
                    <img src={image} alt="foto" className='h-64 rounded-t-xl' />
                </div>

                {hover ? <InfoHover
                    speciality={speciality}
                    location={location}
                    price={price}
                    date={date}
                    rating={rating}
                /> : null}

            </div>

            <div className='border-b border-qaliLightGrey mx-2'>
                <h2 className='text-xl'>{name}</h2>
            </div>

            <div className='flex flex-col justify-center flex-grow self-center px-2 gap-1 w-9/12'>
                <Button size='small' className='verDetalleButton'>
                    <div className='flex justify-evenly items-center flex-grow '>
                        <p>Ver detalle</p>
                        <i className='pi pi-search text-qaliGreen'></i>
                    </div>
                </Button>
                <ModalCitas id={id}/>
            </div>

        </div>
    )
}


export default Card