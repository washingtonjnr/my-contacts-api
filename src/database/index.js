const { Client } = require('pg');

const client = new Client({
    // Connection data
    host: 'localhost',
    port: 5432,
    // Connection user
    user: 'root',
    password: 'root',
    database: 'mycontacts'
});

client.connect();

exports.query = async (query, values) => {
    const { rows } = await client.query(query, values);

    return rows;
};
