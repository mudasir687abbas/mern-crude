import mysql from "mysql2/promise";
let db;
try{
 db = await mysql.createConnection({
      host: "sql12.freesqldatabase.com",
      user: "sql12814377",
      password: "lvNrIK6F93",
      database: "sql12814377",
      port: 3306,
    });
  }catch(err){
    console.log("No Database");
    db = null;
  }
export default db;
