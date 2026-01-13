import mysql from "mysql2/promise";
let db;
try{
 db = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'web_portal',
    });
  }catch(err){
    console.log("No Database");
    db = null;
  }
export default db;
