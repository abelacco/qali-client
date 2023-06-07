import React, { useState, useRef } from 'react'
import CitaElement from '../../Horarios/components/CitasElement'
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog'
import { Toast } from 'primereact/toast'
import { Button } from 'primereact/button'

const CitaElementAndStatus = ({ cita }) => {
  const [visible, setVisible] = useState(false)
  const toast = useRef(null)

  const accept = () => {
    toast.current.show({
      severity: 'info',
      summary: 'Fin',
      detail: 'Has terminado esa cita',
      life: 3000,
    })
  }

  const reject = () => {
    toast.current.show({
      severity: 'warn',
      summary: 'Rejected',
      detail: 'You have rejected',
      life: 3000,
    })
  }
  return (
    <section className='flex w-full items-center gap-5 justify-start '>
      <section className='w-1/3 flex justify-between items-center gap-2 bg-[#0FFFA9]/20 rounded-md'>
        <CitaElement cita={cita} />
      </section>
      <section className='w-auto'>
        <Toast ref={toast} />
        <ConfirmDialog
          visible={visible}
          onHide={() => setVisible(false)}
          message='Estas seguro de dar por finalizada la cita?'
          header='Confirmar fin de cita'
          icon='pi pi-exclamation-triangle'
          accept={accept}
          reject={reject}
        />
        <Button
          onClick={() => setVisible(true)}
          className={` ${
            cita.status === 'pending'
              ? 'bg-[#EF8B8B] hover:bg-slate-800'
              : cita.status === 'fin'
              ? 'bg-[#0FFFA9]/20 hover:bg-slate-800'
              : 'bg-[#FFF1A4] hover:bg-slate-800'
          } min-w-[150px]  text-qaliBlue uppercase  hover:bg-slate-800 border-none`}
          label={cita.status}
        />
      </section>
    </section>
  )
}

export default CitaElementAndStatus
