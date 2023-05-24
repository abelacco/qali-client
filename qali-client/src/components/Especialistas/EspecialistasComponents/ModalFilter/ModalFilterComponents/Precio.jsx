import React, { useState } from 'react'
import { Slider } from 'primereact/slider';

function Precio({ filterValues }) {

    const [sliderValue, setSliderValue] = useState([0, 100]);
    const [fValues, setFValues] = filterValues;

    const handlerSlider = (event) => {
        const value = event.value;
        setSliderValue(value);
        setFValues({
            ...fValues,
            precio: value
        })
    }

    return (
        <div className='flex items-end justify-between border-b border-qaliLightGrey p-4'>
            <h3>Precio:</h3>
            <div className='flex flex-col gap-1 mr-6'>
                <div className='flex justify-between'>
                    <p>min/{sliderValue[0]}</p>
                    <p>max/{sliderValue[1]}</p>
                </div>
                <Slider value={sliderValue} onChange={handlerSlider} className='w-40' range min={0} max={100} />
            </div>
        </div>
    )
}

export default Precio