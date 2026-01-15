var serverAPI = https://mern-crude.vercel.app/api/users;
export const getUsers = async () => {
    const response = await fetch("https://mern-crude.vercel.app/api/users", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    return response;
  
};
export const createUser = async (data) => {
    const response = await fetch("https://mern-crude.vercel.app/api/users", {
      method: "POST",
      body:JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
     return response;
  
};
export const deleteUser = async (id) => {
    const response = await fetch(`https://mern-crude.vercel.app/api/users/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
     return response;
  
};
export const getUserById = async (id) => {
    const response = await fetch(`https://mern-crude.vercel.app/api/users/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
     return response;
  
};
export const updateUser = async (id,data) => {
    const response = await fetch(`https://mern-crude.vercel.app/api/users/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
     return response;
  
};
