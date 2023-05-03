import mysql from "mysql"

export const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Xablau26!',
  database: 'crud'
});