export const NodeService = {
  getTreeTableNodesData() {
    return [
      {
        key: '0',
        data: {
          day: 'Lunes',
          horarios: 'No disponible',
          type: 'Folder',
        },
      },
      {
        key: '0',
        data: {
          day: 'Martes',
          horarios: 'No disponible',
          type: 'Folder',
        },
      },
      {
        key: '0',
        data: {
          day: 'Miercoles',
          horarios: 'No disponible',
          type: 'Folder',
        },
      },
      {
        key: '0',
        data: {
          day: 'Jueves',
          horarios: 'No disponible',
          type: 'Folder',
        },
      },
      {
        key: '0',
        data: {
          day: 'Viernes',
          horarios: 'No disponible',
          type: 'Folder',
        },
      },
      {
        key: '0',
        data: {
          day: 'Sabado',
          horarios: 'No disponible',
          type: 'Folder',
        },
      },
    ]
  },

  getTreeTableNodes() {
    return Promise.resolve(this.getTreeTableNodesData())
  },

  getTreeNodes() {
    return Promise.resolve(this.getTreeNodesData())
  },
}
