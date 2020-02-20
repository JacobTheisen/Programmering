import mysql from 'mysql';

// Setup MySQL-server connection
let connection = mysql.createConnection({
  host: 'mysqladmin.stud.ntnu.no',
  user: 'pettelau_',     // Replace "username" with your username
  password: 'Gruppe8', // Replace "password" with your password
  database: 'pettelau_'  // Replace "username" with your username
});

// Connect to MySQL-server
connection.connect(error => {
  if (error) return console.error(error); // If error, show error in console (in red text) and return
});

// Perform select-query that fetches all the Students table rows from the database
connection.query('SELECT * FROM Leaderboard', (error, players) => {
  if (error) return console.error(error); // If error, show error in console (in red text) and return

  for (let player of players) {
    console.log(leaderboard.username, leaderboard.email, leaderboard.score);
  }
});
