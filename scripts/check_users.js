const pool = require('../config/config');
(async () => {
  try {
    const [rows] = await pool.promise().query('DESCRIBE users');
    console.log(JSON.stringify(rows, null, 2));
    process.exit(0);
  } catch (err) {
    console.error('Error querying users table:', err && err.stack ? err.stack : err);
    process.exit(1);
  }
})();