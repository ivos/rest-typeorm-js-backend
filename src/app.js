const typeorm = require('typeorm')

const main = async () => {
  const connection = await typeorm.createConnection({
    type: 'postgres',
    host: 'localhost',
    post: 5432,
    username: 'postgres',
    password: 'password',
    database: 'postgres',
    synchronize: true,
    entities: [
      new typeorm.EntitySchema(require('./customer/Customer'))
    ]
  })
  let customer = {
    name: 'Name 1'
  }
  customer = await connection.getRepository('Customer').save(customer)
  console.log('saved', customer)
}

main()
