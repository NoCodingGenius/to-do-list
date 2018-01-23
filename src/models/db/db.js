const pgpromise = require('pg-promise')();
const connectionString = 'postgres://localhost:5432/todo';
const db = pgpromise(connectionString);

module.exports = db;
