require('dotenv').config();

const config = {
    dev: process.env.NODE_ENV !== 'preoduction',
    dbUser: process.env.DB_USER,
    dbHost: process.env.DB_HOST,
    dbPassword: process.env.DB_PASSWORD,
    dbName: process.env.DB_NAME,
}

module.exports = { config };