import db from "../config/db.js";

const User = {
  getUsers: async () => {
    if(!db){
      throw new Error("Database Connection Failed");
    }
    const [rows] = await db.query("SELECT * FROM user");
    return rows || null;
  },

  getUserById: async (id) => {
    const [rows] = await db.query(
      "SELECT * FROM user WHERE id = ?",
      [id]
    );
    return rows[0] || null;
  },

  createUser: async (name, role) => {
    if(!db){
      throw new Error("Database Connection failed");
    }
    const [result] = await db.query(
      "INSERT INTO user (name, role) VALUES (?, ?)",
      [name, role]
    );
    return result.insertId || null ;
  },

  updateUser: async (id, name, role) => {
    if(!db){
      throw new Error("Database Connection failed");
    }
    await db.query(
      "UPDATE user SET name = ?, role = ? WHERE id = ?",
      [name, role, id]
    );
    return true;
  },

  deleteUser: async (id) => {
    if(!db){
      throw new Error("Database Connection failed");
    }
    await db.query("DELETE FROM user WHERE id = ?", [id]);
    return true;
  }
};

export default User;
