import { useEffect, useState } from 'react'
import { RadioButton } from 'primereact/radiobutton'
import { CascadeSelect } from 'primereact/CascadeSelect'
import { TreeTable } from 'primereact/treetable'
import { Column } from 'primereact/column'
import { Button } from 'primereact/button'
import { NodeService } from '../services/NodeService'
const PersonalizarHorario = () => {
  const [ingredient, setIngredient] = useState('')
  const [nodes, setNodes] = useState([])

  useEffect(() => {
    NodeService.getTreeTableNodes().then((data) => setNodes(data))
  }, [])

  const actionTemplate = () => {
    return (
      <div className='flex flex-wrap gap-2'>
        <Button
          type='button'
          className='bg-[#0FFFA9]'
          icon='pi pi-plus'
          severity='success'
          rounded
        ></Button>
        <Button type='button' className='bg-[#172554]' icon='pi pi-copy' rounded></Button>
      </div>
    )
  }

  return (
    <section className=' h-full mx-auto  flex flex-col items-start gap-10'>
      <section className='card'>
        <TreeTable value={nodes} tableStyle={{ minWidth: '50rem' }} className='max-w-full'>
          <Column className='text-sm' field='day' header='Dia' expander></Column>
          <Column className='text-sm' field='horarios' header='Horarios'></Column>
          <Column className='text-sm' body={actionTemplate} headerClassName='w-10rem' />
        </TreeTable>
      </section>

      <section className='flex flex-col items-start gap-5 w-full'>
        <h2 className='max-w-max font-normal text-base tex-[#132B5B]'>
          Break antes o despues del evento
        </h2>

        <section className='flex flex-col items-start justify-center gap-5'>
          <div className='flex align-items-center'>
            <RadioButton
              inputId='antes'
              name='antes'
              value='antes'
              onChange={(e) => setIngredient(e.value)}
              checked={ingredient === 'antes'}
            />
            <label htmlFor='antes' className='ml-2'>
              Antes del Evento
            </label>
          </div>
          <div className='flex items-center gap-10'>
            <div className='flex align-items-center'>
              <RadioButton
                inputId='despues'
                name='despues'
                value='despues'
                onChange={(e) => setIngredient(e.value)}
                checked={ingredient === 'despues'}
              />
              <label htmlFor='despues' className='ml-2'>
                Despues del Evento
              </label>
            </div>
            <div>
              <div className='card flex justify-content-center'>
                <CascadeSelect
                  optionLabel='horarios'
                  optionGroupLabel='name'
                  className='w-full md:w-14rem'
                  breakpoint='767px'
                  placeholder='15 min'
                />
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  )
}

export default PersonalizarHorario
