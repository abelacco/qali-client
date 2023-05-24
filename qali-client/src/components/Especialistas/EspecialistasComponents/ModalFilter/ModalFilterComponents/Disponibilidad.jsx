import React,{useState} from 'react';
import { Checkbox } from 'primereact/checkbox';

function Disponibilidad({filterValues}) {

    const [fValues, setFValues] = filterValues;
    const [checked, setChecked] = useState(false);

    const handleClick = () => {
        setChecked(!checked);
        setFValues({
            ...fValues,
            disponibilidad: checked
        })
    }

    return (
        <div>
            <Checkbox onChange={handleClick} checked={checked} />
            <label>Disponibilidad</label>
        </div>
    )
}

export default Disponibilidad