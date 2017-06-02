const pgp = require('pg-promise')(/*options*/)
const db = pgp(process.env.DATABASE_URL || 'postgres://localhost:5432/musicdb')

module.exports = db 
