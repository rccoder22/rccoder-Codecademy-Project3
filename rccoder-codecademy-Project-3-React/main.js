const { Pool } = require('pg');

const con = new Pool({
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password: 'password',
    database: 'BaseballStats_db'
});

con.connect().then(() => {
    console.log('Connected to the database');

    con.query('SELECT * FROM BaseballStats', (err, res) => {
        if (err) {
            console.error('Error executing query', err.stack);
        } else {
            console.log('Query results:', res.rows);
        }
    });
});