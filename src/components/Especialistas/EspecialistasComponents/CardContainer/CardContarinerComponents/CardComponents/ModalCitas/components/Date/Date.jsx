import React, { useEffect, useState } from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Calendar } from 'primereact/calendar';
import { getHoursAvailableAsync } from '../../../../../../../../../redux/store/appointment/hoursAvailableSlice';
import { useDispatch, useSelector } from 'react-redux';
import "./date.css"

function Date({ stateButtonsPage, stateDateCalendar, formik }) {
  const id = formik.values.id;
  const dispatch = useDispatch();
  const { hoursAvailable } = useSelector((state)=>state.hoursAvailable)
  const [buttonsPage, setButtonsPage] = stateButtonsPage;
  const [dateCalendar, setDateCalendar] = stateDateCalendar;
  const [valueCalendar, setValueCalendar] = useState("");
  const { date, hour, modality } = formik.values.turn;
  const [statusButton, setStatusButton] = useState({
    online: false,
    presential: false,
  });
  
  useEffect(()=>{
    setButtonsPage({...buttonsPage, nextPage:(!!date && !!hour && !!modality)})
  },[formik.values.turn])
  const handleDate = (date)=>{ 
    setValueCalendar(date);
    date = date.toString();
    const dateSplit = date.split(' ');
    const dictMonth = {
      Jan: "01",
      Feb: "02",
      Mar: "03",
      Apr: "04",
      May: "05",
      Jun: "06",
      Jul: "07",
      Aug: "08",
      Sep: "09",
      Oct: "10",
      Nov: "11",
      Dec: "12",
    }
    const newFormat = `${dateSplit[3]}/${dictMonth[dateSplit[1]]}/${dateSplit[2]}`;
    formik.setFieldValue('turn', {...formik.values.turn,hour:"", date: newFormat});
    dispatch(getHoursAvailableAsync(id, newFormat));
    formCompletedOk();
  }

  const formCompletedOk = (origin, value)=>{
    const { date, hour, modality } = formik.values.turn;
    let data = {
      date: date,
      hour: hour,
      modality: modality
    }
    data[origin] = value;
    if(!!data.date && !!data.hour && !!data.modality){
      setButtonsPage({
        ...buttonsPage,
        nextPage: true
      })
    }
  }

  return (
    <div className='h-4/5'>
      <div className='flex mb-1 w-full'>
        <div className='flex-col items-center justify-center w-1/2'>
          <div className='w-full flex justify-center mb-5'>
            <div className='w-3/4 flex justify-around'>
              <button
                className={`w-1/3 mt-1.5 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-950 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm ${formik.values.turn.modality == "online" && "outline-none ring-2 ring-offset-2 ring-blue-500"}`}
                onClick={()=>{
                  setStatusButton({online: true, presential: false});
                  formik.setFieldValue('turn',{...formik.values.turn, modality: "online"});
                  formCompletedOk("modality", "online");
                }}
              >
                  Online
              </button>
              <button
                className={`w-1/3 mt-1.5 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-950 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm ${formik.values.turn.modality == "presencial" && "outline-none ring-2 ring-offset-2 ring-blue-500"}`}
                onClick={()=> {
                  setStatusButton({online: false, presential: true});
                  formik.setFieldValue('turn',{...formik.values.turn, modality: "presencial"});
                  formCompletedOk("modality", "online");
                }}
              >
                Presencial
              </button>
            </div>
          </div>
          <div className='w-full flex justify-center'>
            <Calendar
              value={dateCalendar}
              dateFormat='dd/mm/yy'
              onChange={(e) =>{
                setDateCalendar(e.target.value);
                handleDate(e.target.value);
              }} 
              placeholder='Seleccione una fecha'
              inline
            />
          </div>
        </div>
        <div className='flex justify-center w-1/2'>
          <div className='flex flex-col gap-2 p-2 items-center w-10/12 h-full border border-slate-300 rounded-md'>
            <div className='w-full p-1'>
              Horarios disponibles en el dia elegido:
            </div>
            <div className='flex flex-wrap justify-center items-center w-48 h-full'>
              {
                (formik.values.turn.date && !hoursAvailable.length) ?
                <ProgressSpinner className="w-10"/> :
                <div className='flex flex-wrap'>
                  {hoursAvailable.map((element)=>{
                    return(
                      <div className={`m-1 border-2 rounded-md bg-blue-950 text-white px-1.5 h-7 w-18 text-center text-base ${formik.values.turn.hour == element ? "outline-none ring-2 ring-offset-1/2 ring-blue-500" : ""}`}>
                          <button
                            id={element}
                            onClick={({target})=>{
                              formik.setFieldValue('turn', {...formik.values.turn, hour: target.id});
                              formCompletedOk("hour", target.id);
                            }
                          }
                          >  
                            {element}
                          </button>
                      </div>
                    )
                  })}
                </div>
            }
            </div>          
          </div>
        </div>
      </div>
      <div className='flex justify-center w-full'>
        {
          !modality?
            <p className='flex justify-center bg-red-50 p-1 rounded w-full'>Debe elegir una modalidad para su turno</p> :
            (
              !date?
                <p className='flex justify-center bg-red-50 p-1 rounded w-full'>Debe elegir una fecha para su turno en el calendario</p> :
                !hour?
                  <p className='flex justify-center bg-red-50 p-1 rounded w-full'>Debe elegir un horario para su turno</p> :
                  <p className='flex justify-center bg-green-50 p-1 rounded w-full'>
                    {`El turno elegido es el día ${date} a las ${hour}, de forma ${modality}`} 
                  </p>
            )
        }
      </div>
    </div>
  )
}

export default Date;
