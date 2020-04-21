module.exports = {
  name: 'Customer',
  columns: {
    id: {
      primary: true,
      type: 'bigint',
      generated: true
    },
    version: {
      type: 'bigint',
      version: true
    },
    name: {
      type: 'varchar',
      length: 100
    }
  }
}
