import React, { useState, useEffect, useRef } from 'react'
import { classNames } from 'primereact/utils'
import { FilterMatchMode, FilterOperator } from 'primereact/api'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'primereact/dropdown'
import { InputNumber } from 'primereact/inputnumber'
import { Button } from 'primereact/button'
import { ProgressBar } from 'primereact/progressbar'
import { Calendar } from 'primereact/calendar'
import { MultiSelect } from 'primereact/multiselect'
import { Slider } from 'primereact/slider'
import { Tag } from 'primereact/tag'
import { TriStateCheckbox } from 'primereact/tristatecheckbox'
import { CustomerService } from '../service/CustomerService'
import FormPatientModal from '../../../FormPatient/FormPatientModal'

export default function AdvancedFilterDemo() {
  const [customers, setCustomers] = useState(null)
  const [filters, setFilters] = useState(null)
  const [loading, setLoading] = useState(false)
  const [globalFilterValue, setGlobalFilterValue] = useState('')

  useEffect(() => {
    setLoading(true)
    CustomerService.getCustomersMedium().then((data) => {
      setCustomers(getCustomers(data))
      setLoading(false)
    })
    initFilters()
  }, [])

  const getCustomers = (data) => {
    return [...(data || [])].map((d) => {
      d.date = new Date(d.date)

      return d
    })
  }

  const formatDate = (value) => {
    return value.toLocaleDateString('en-US', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })
  }

  const clearFilter = () => {
    initFilters()
  }

  const onGlobalFilterChange = (e) => {
    const value = e.target.value
    let _filters = { ...filters }

    _filters['global'].value = value

    setFilters(_filters)
    setGlobalFilterValue(value)
  }

  const initFilters = () => {
    setFilters({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      name: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
      },
      'country.name': {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
      },
      representative: { value: null, matchMode: FilterMatchMode.IN },
      date: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }],
      },
      dni: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
      },
      phone: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
      },
      status: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
      },
    })
    setGlobalFilterValue('')
  }

  const renderHeader = () => {
    return (
      <div className='flex justify-content-between gap-5 flex-col md:flex-row'>
        <Button
          type='button'
          icon='pi pi-filter-slash'
          label='Borrar filtros'
          outlined
          onClick={clearFilter}
        />
        <span className='p-input-icon-left'>
          <i className='pi pi-search' />
          <InputText
            value={globalFilterValue}
            onChange={onGlobalFilterChange}
            placeholder='Buscar'
          />
        </span>
        <Button onClick={openModal} label='Crear paciente' />
      </div>
    )
  }

  const [isModalOpen, setIsModalOpen] = useState({
    primaryModal: false,
    specialistModal: false,
    patientModal: false,
  })
  const modalRef = useRef(null)

  const openModal = () => {
    setIsModalOpen({
      primaryModal: false,
      specialistModal: false,
      patientModal: true,
    })
  }

  const closeModal = () => {
    setIsModalOpen({
      primaryModal: false,
      specialistModal: false,
      patientModal: false,
    })
  }

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal()
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  const filterClearTemplate = (options) => {
    return (
      <Button
        type='button'
        icon='pi pi-times'
        onClick={options.filterClearCallback}
        severity='secondary'
      ></Button>
    )
  }

  const filterApplyTemplate = (options) => {
    return (
      <Button
        type='button'
        icon='pi pi-check'
        onClick={options.filterApplyCallback}
        severity='success'
      ></Button>
    )
  }
  const filterFooterTemplate = () => {
    return <div className='px-3 pt-0 pb-3 text-center'>Filter by Country</div>
  }

  const representativeBodyTemplate = (rowData) => {
    const representative = rowData.representative

    return (
      <div className='flex align-items-center gap-2'>
        <img
          alt={representative.name}
          src={`https://primefaces.org/cdn/primereact/images/avatar/${representative.image}`}
          width='32'
        />
        <span>{representative.name}</span>
      </div>
    )
  }

  const dateBodyTemplate = (rowData) => {
    return formatDate(rowData.date)
  }

  const dateFilterTemplate = (options) => {
    return (
      <Calendar
        value={options.value}
        onChange={(e) => options.filterCallback(e.value, options.index)}
        dateFormat='mm/dd/yy'
        placeholder='mm/dd/yyyy'
        mask='99/99/9999'
      />
    )
  }

  const statusBodyTemplate = (rowData) => {
    return <Button outlined onClick={openModal} label='Ver mas informacion' />
  }

  const header = renderHeader()

  return (
    <div className='card'>
      <DataTable
        value={customers}
        paginator
        showGridlines
        rows={10}
        loading={loading}
        dataKey='id'
        filters={filters}
        globalFilterFields={[
          'name',
          'country.name',
          'representative.name',
          'balance',
          'status',
          'dni',
          'phone',
        ]}
        header={header}
        emptyMessage='No customers found.'
      >
        <Column
          field='name'
          header='Nombre'
          filter
          filterPlaceholder='Search by name'
          style={{ minWidth: '12rem' }}
        />
        <Column
          field='dni'
          header='DNI'
          filter
          filterPlaceholder='Search by DNI'
          style={{ minWidth: '10rem' }}
        />
        <Column
          field='phone'
          header='Telefono'
          filter
          filterPlaceholder='Search by phone'
          style={{ minWidth: '10rem' }}
        />
        <Column
          header='Date'
          field='Cita'
          dataType='date'
          style={{ minWidth: '10rem' }}
          body={dateBodyTemplate}
          filter
          filterElement={dateFilterTemplate}
        />
        <Column
          field='status'
          header='Stado de la cita'
          filter
          filterPlaceholder='Search by status'
          style={{ minWidth: '10rem' }}
        />
        <Column
          field='actions'
          body={statusBodyTemplate}
          header='Acciones'
          style={{ minWidth: '10rem' }}
        />
      </DataTable>

      {/* modal */}
      {isModalOpen.patientModal && (
        <div className='fixed z-10 inset-0 overflow-y-auto'>
          <div className='flex items-center justify-center min-h-screen px-4 text-center'>
            <div className='fixed inset-0 transition-opacity'>
              <div className='absolute inset-0 bg-gray-500 opacity-75'></div>
            </div>
            <span className='hidden sm:inline-block sm:align-middle sm:h-screen'></span>
            &#8203;
            {isModalOpen.primaryModal && (
              <div
                ref={modalRef}
                className='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'
              >
                <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                  <div className='sm:flex sm:items-start'>
                    <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                      <h3 className='text-lg leading-6 font-medium text-gray-900'>Crear cuenta</h3>
                      <div className='mt-2'>
                        <p className='text-sm text-gray-500'>Seleccione qué cuenta desea crear</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
                  {/* <button
                    onClick={closeModal}
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-950 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Cerrar
                  </button> */}
                  <div className='flex justify-center w-full sm:flex-row'>
                    <button
                      onClick={() => openModal('patient')}
                      className='mt-3 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-950 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
                    >
                      Paciente
                    </button>
                    <button
                      onClick={() => openModal('specialist')}
                      className='mt-3 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-950 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
                    >
                      Especialista
                    </button>
                  </div>
                </div>
              </div>
            )}
            {isModalOpen.specialistModal && (
              <div id='spModal' className='z-10'>
                <FormDoctorModal closeModal={closeModal} />
              </div>
            )}
            {isModalOpen.patientModal && (
              <div className='z-10'>
                <FormPatientModal closeModal={closeModal} />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
