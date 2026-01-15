import User from "../models/User.js";

export const getAllUsers = async (req, res) => {
  const users = await User.getUsers();
   if(!users){
    throw new Error("No Users exit!!");
  }
  res.json(users);
};

export const getUserById = async (req, res) => {
  const user = await User.getUserById(req.params.eid);
  if(!user){
    throw new Error("No User exit!!");
  }
  res.json(user);
  
};

export const addUser = async (req, res) => {
  const { name, email, role} = req.body;
  const insertedId = await User.createUser(name, email, role);
  res.json({ message: "User created", insertedId });
};

export const editUser = async (req, res) => {
  const { name, email, role} = req.body;
  await User.updateUser(req.params.uid, name, email,  role);
  res.json({ message: "User updated" });
};

export const removeUser = async (req, res) => {
  await User.deleteUser(req.params.delid);
  res.json({ message: "User deleted" });
};
