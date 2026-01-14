var serverAPI = "/api/users";
export const getUsers = async () => {
    const response = await fetch(serverAPI, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    return response;
  
};
export const createUser = async (data) => {
    const response = await fetch(serverAPI, {
      method: "POST",
      body:JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
     return response;
  
};
export const deleteUser = async (id) => {
    const response = await fetch(`${serverAPI}/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
     return response;
  
};
export const getUserById = async (id) => {
    const response = await fetch(`${serverAPI}/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
     return response;
  
};
export const updateUser = async (id,data) => {
    const response = await fetch(`${serverAPI}/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
     return response;
  
};
