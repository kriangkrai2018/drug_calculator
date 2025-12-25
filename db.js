const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'gateway01.ap-southeast-1.prod.aws.tidbcloud.com',
    port: 4000,
    user: 'utqDEKTsPzQHUm4.root',
    password: 'x5aHcQP0Y9m9gZMZ',
    database: 'drug_calculator_db', // เปลี่ยนเป็น DB ใหม่ตามที่ขอ
    ssl: {
        rejectUnauthorized: false // เทียบเท่ากับ MYSQL_ATTR_SSL_VERIFY_SERVER_CERT => false ใน PHP
    }
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to TiDB database: drug_calculator_db');
});

module.exports = connection;