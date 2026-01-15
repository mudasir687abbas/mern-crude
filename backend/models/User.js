import db from "../config/db.js";

const User = {
  getUsers: async () => {
    if(!db){
      throw new Error("DataBase connection failed");
    }
    const [rows] = await db.query("SELECT * FROM users");
    return rows || null;
  },

  getUserById: async (id) => {
    if(!db){
      throw new Error("Database Connection Failed");
    }
    const [rows] = await db.query(
      "SELECT * FROM users WHERE id = ?",
      [id]
    );
    return rows[0] || null;
  },

  createUser: async (name,email, role) => {
    if(!db){
      throw new Error("Database Connection failed");
    }
    const [result] = await db.query(
      "INSERT INTO users (name,email, role) VALUES (?, ?, ?)",
      [name, email, role]
    );
    return result.insertId || null ;
  },

  updateUser: async (id, name, email, role) => {
    if(!db){
      throw new Error("Database Connection failed");
    }
    await db.query(
      "UPDATE users SET name = ?, email=?, role = ? WHERE id = ?",
      [name, email, role, id]
    );
    return true;
  },

  deleteUser: async (id) => {
    if(!db){
      throw new Error("Database Connection failed");
    }
    await db.query("DELETE FROM users WHERE id = ?", [id]);
    return true;
  }
};

export default User;
