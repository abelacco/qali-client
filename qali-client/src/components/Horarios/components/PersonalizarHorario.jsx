import { useEffect, useState } from 'react'
import { TreeTable } from 'primereact/treetable'
import { Column } from 'primereact/column'
import { Button } from 'primereact/button'
import { NodeService } from '../services/NodeService'
const PersonalizarHorario = () => {
  const [nodes, setNodes] = useState([])

  useEffect(() => {
    NodeService.getTreeTableNodes().then((data) => setNodes(data))
  }, [])

  const actionTemplate = () => {
    return (
      <div className='flex flex-wrap gap-2'>
        <Button type='button' className='bg-qaliBlue' icon='pi pi-copy' rounded></Button>
        <Button type='button' className='bg-qaliBlue' icon='pi pi-plus' severity='success' rounded></Button>
      </div>
    )
  }

  const header = <div className='text-xl font-bold'>Personalizar horario</div>
  const footer = (
    <div className='flex justify-content-start'>
      <Button icon='pi pi-refresh' label='Reiniciar' severity='warning' />
    </div>
  )

  return (
    <div className='card'>
      <TreeTable
        value={nodes}
        header={header}
        footer={footer}
        tableStyle={{ minWidth: '50rem' }}
        className='max-w-full'
      >
        <Column field='day' header='Dia' expander></Column>
        <Column field='horarios' header='Horarios'></Column>
        <Column body={actionTemplate} headerClassName='w-10rem' />
      </TreeTable>
    </div>
  )
}

export default PersonalizarHorario
