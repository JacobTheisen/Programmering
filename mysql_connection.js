import mysql from 'mysql';
// Setup MySQL-server connection
export let connection = mysql.createConnection({
  host: 'mysql.stud.ntnu.no',
  user: 'pettelau_', // Replace "username" with your username
  password: 'Gruppe8', // Replace "password" with your password
  database: 'pettelau_blackjack_leaderboard' // Replace "username" with your username
});
// Connect to MySQL-server
connection.connect(error => {
  if (error) return console.error(error);
});
