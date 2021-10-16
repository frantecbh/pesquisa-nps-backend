module.exports = {
  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "username": "postgres",
  "password": 'frantec@01',
  "database": "pesquisanps",
 
  "migrations":["./src/database/migrations/**.ts"],
  "entities":["./src/models/**.ts"],
    "cli":{
      "migrationsDir": "./src/database/migrations"
  }
}
