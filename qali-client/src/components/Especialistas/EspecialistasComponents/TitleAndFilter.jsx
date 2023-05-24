import React from 'react'
import ModalFilter from './ModalFilter/ModalFilter'

function TitleAndFilter() {
    return (
        <div className='flex gap-24'>
            <div className='bg-qaliBlue p-4 rounded-lg'>
                <h1 className='text-3xl text-zinc-50'>Especialistas en alguna Ciudad</h1>
            </div>
            <div className='flex items-center gap-2 text-2xl'>
                <p>Filtrar por:</p>
                <ModalFilter/>
            </div>
        </div>
    )
}

export default TitleAndFilter