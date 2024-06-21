const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Create a MySQL connection pool
const db = mysql.createPool({
  host: 'localhost',
  user: 'root', 
  password: 'Wairimu1@1nimo24', 
  database: 'career_trail' 
});

// Test the database connection
db.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database');
  connection.release();
});

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});


// User login
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
      db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
          bcrypt.compare(password, results[0].password, (err, result) => {
            if (result) {
              req.session.loggedin = true;
              req.session.email = email;
              res.send('Login successful');
            } else {
              res.send('Incorrect Password!');
            }
          });
        } else {
          res.send('Email not found!');
        }
      });
    } else {
      res.send('Please enter email and password!');
    }
  });

  // Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });