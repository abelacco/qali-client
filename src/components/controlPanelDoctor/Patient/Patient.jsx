import React from 'react'

import LayoutDashboard from '../../Layouts/LayoutDashboard'
import TablePatient from './components/TablePatient'

const Patient = () => {
  return (
    <LayoutDashboard>
      <section>
        <TablePatient />
      </section>
    </LayoutDashboard>
  )
}

export default Patient
