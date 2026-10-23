import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('./database.sqlite', (err) => {
  if (err) {
    console.error('Erro ao abrir o SQLite:', err.message);
  } else {
    console.log('⚡ Conectado ao banco SQLite local!');
  }
});

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS usuarios (
      id TEXT PRIMARY KEY,
      nome TEXT,
      email TEXT UNIQUE,
      senha TEXT
    )
  `);
});

export default db;