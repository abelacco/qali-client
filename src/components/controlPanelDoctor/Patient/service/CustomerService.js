export const CustomerService = {
  getData() {
    return [
      {
        id: 1000,
        name: 'James Butt',
        dni: 45121114,
        phone: '1234567890',
        date: '2015-09-13',
        status: 'Pendiente',
      },
      {
        id: 1001,
        name: 'Josephine Darakjy',
        dni: 12345678,
        phone: '9876543210',
        date: '2019-02-09',
        status: 'Completada',
      },
      {
        id: 1476,
        name: 'Glory Schieler',
        dni: 87654321,
        phone: '5555555555',
        date: '2017-05-13',
        status: 'Completada',
      },
      {
        id: 1477,
        name: 'Rasheeda Sayaphon',
        dni: 98765432,
        phone: '9999999999',
        date: '2017-02-21',
        status: 'Completada',
      },
      {
        id: 1478,
        name: 'Alpha Palaia',
        dni: 56473829,
        phone: '1111111111',
        date: '2017-07-21',
        status: 'Completada',
      },
      {
        id: 1479,
        name: 'Refugia Jacobos',
        dni: 90817263,
        phone: '3333333333',
        date: '2020-11-25',
        status: 'Pendiente',
      },
      {
        id: 1480,
        name: 'Shawnda Yori',
        dni: 28374659,
        phone: '7777777777',
        date: '2018-05-09',
        status: 'Pendiente',
      },
      {
        id: 1481,
        name: 'Mona Delasancha',
        dni: 91827364,
        phone: '2222222222',
        date: '2017-10-06',
        status: 'Pendiente',
      },
      {
        id: 1499,
        name: 'Chauncey Motley',
        dni: 64738291,
        phone: '4444444444',
        date: '2019-04-23',
        status: 'Cancelada',
      },
    ]
  },

  getCustomersMedium() {
    return Promise.resolve(this.getData().slice(0, 50))
  },

  getCustomers(params) {
    const queryParams = params
      ? Object.keys(params)
          .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
          .join('&')
      : ''

    return fetch('https://www.primefaces.org/data/customers?' + queryParams).then((res) =>
      res.json(),
    )
  },
}
