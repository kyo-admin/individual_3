const { Pool } = require('pg');

// Configuración de la base de datos
const pool = new Pool({
  user: 'user_db',
  host: 'localhost',
  database: 'db',
  password: '123456',
  port: 5432,
});

// Ejemplo de consulta a la base de datos
pool.query('SELECT * FROM usuarios', (err, result) => {
  if (err) {
    console.error('Error en la consulta:', err);
  } else {
    console.log('Resultado de la consulta:', result.rows);
  }

  // Cierra la conexión del pool cuando hayas terminado de usarlo
  pool.end();
});
