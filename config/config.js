// ในไฟล์ config.js
const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST || 'gateway01.ap-southeast-1.prod.aws.tidbcloud.com',
    user: process.env.MYSQL_USER || 'utqDEKTsPzQHUm4.root',
    password: process.env.MYSQL_PASSWORD || 'x5aHcQP0Y9m9gZMZ',
    database: process.env.MYSQL_DATABASE || 'drug_calculator_db',
    charset: process.env.MYSQL_CHARSET || 'utf8mb4',
    port: process.env.MYSQL_PORT || 4000, 
    ssl: {
        rejectUnauthorized: false
    },
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;