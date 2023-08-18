const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mysql = require('mysql2');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Pass@root1',
  database: 'socket',
  port: 3306
});

db.connect(err => {
  if (err) {
    console.error('MySQL connection error:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

io.on('connection', socket => {
  console.log('A user connected');

  const fetchQuery = `SELECT * FROM messages ORDER BY timestamp ASC`;
  db.query(fetchQuery, (err, results) => {
    if (err) {
      console.error('Error fetching messages:', err);
    } else {
      socket.emit('messages', results);
    }
  });

  socket.on('message', message => {
    const insertQuery = `INSERT INTO messages (text, timestamp) VALUES (?, NOW())`;
    const query = 'SELECT * FROM your_table';
    db.query(insertQuery, [message], (err, result) => {
      if (err) {
        console.error('Error inserting message:', err);
      } else {
        io.emit('message', { id: result.insertId, text: message, timestamp: new Date() });
      }
    });
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

const PORT = process.env.PORT || 3012;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
