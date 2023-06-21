import React, { useEffect, useState } from 'react'
import { Button } from 'primereact/button'
import { Calendar } from 'primereact/calendar';
import { getHoursAvailableAsync } from '../../../../../../../../../redux/store/appointment/hoursAvailableSlice';
import { useDispatch, useSelector } from 'react-redux';
import "./date.css"

function Date({ stateInfoPage, formik }) {
  const id = formik.values.id;
  const dispatch = useDispatch();
  const { hoursAvailable } = useSelector((state)=>state.hoursAvailable)
  const [infoPage, setInfoPage] = stateInfoPage;
  const [valueCalendar, setValueCalendar] = useState("");
  const [statusButton, setStatusButton] = useState({
    online: false,
    presential: false,
  });

  const handleDate = (date)=>{ 
    setValueCalendar(date);
    console.log(date)
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
    const newFormat = `${dateSplit[3]}/${dictMonth[dateSplit[1]]}/${dateSplit[2]}`
    formik.setFieldValue('turn', {...formik.values.turn, date: newFormat})
    dispatch(getHoursAvailableAsync(id, newFormat));
    formCompletedOk();
  }

  const formCompletedOk = ()=>{
    const { date, hour, modality } = formik.values.turn;
    if(!!date && !!hour && !!modality){
      setInfoPage({
        ...infoPage,
        nextPage: true
      })
    }
  }
  
  return (
    <div className='h-full'>
      <div className='flex mb-5'>
        <div className='flex-col items-center justify-center w-3/5'>
          <div className='w-full flex justify-center mb-5'>
            <div className='w-3/4 flex justify-around'>
              <button
                className={`w-1/3 mt-1.5 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-950 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm ${statusButton.online && "outline-none ring-2 ring-offset-2 ring-blue-500"}`}
                onClick={()=>{
                  setStatusButton({online: true, presential: false});
                  formik.setFieldValue('turn',{...formik.values.turn, modality: "online"});
                  formCompletedOk();
                }}
              >
                  Online
              </button>
              <button
                className={`w-1/3 mt-1.5 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-950 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm ${statusButton.presential && "outline-none ring-2 ring-offset-2 ring-blue-500"}`}
                onClick={()=> {
                  setStatusButton({online: false, presential: true});
                  formik.setFieldValue('turn',{...formik.values.turn, modality: "presencial"});
                  formCompletedOk();
                }}
              >
                Presencial
              </button>
            </div>
          </div>
          <div className='w-full flex justify-center'>
            <Calendar
              value={valueCalendar}
              dateFormat='dd/mm/yy'
              onChange={(e) =>{
                handleDate(e.target.value);
              }} 
              placeholder='Seleccione una fecha'
              inline
            />
          </div>
        </div>
        <div className='w-2/5'>
          <div className='flex flex-col gap-2'>
            <div className='w-full'>
              Horarios disponibles en el dia elegido:
            </div>
            <div className='flex flex-wrap'>
              {hoursAvailable.map((element)=>{
                return(
                  <div className={`m-1 border-2 rounded-md bg-blue-950 text-white px-1.5 h-7 w-18 text-center text-base ${formik.values.turn.hour == element ? "outline-none ring-2 ring-offset-1/2 ring-blue-500" : ""}`}>
                      <button
                        id={element}
                        onClick={({target})=>{
                          formik.setFieldValue('turn', {...formik.values.turn, hour: target.id});
                          formCompletedOk();
                        }
                        }
                      >  
                        {element}
                      </button>
                  </div>
                )
              })}
            </div>          
          </div>
        </div>
      </div>
    </div>
  )
}

export default Date;
