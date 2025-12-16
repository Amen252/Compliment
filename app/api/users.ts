import api from "../lib/axios";

// ✔ Get all users
export const getAllUsers = async () => {
  const res = await api.get("/users");
  return res.data;
};

// ✔ Get a single user
export const getUserById = async (id) => {
  const res = await api.get(`/users/${id}`);
  return res.data;
};

// ✔ Create a new user
export const createUser = async (userData) => {
  const res = await api.post("/users", userData);
  return res.data;
};

// ✔ Update a user
export const updateUser = async (id, userData:any) => {
  const res = await api.put(`/users/${id}`, userData);
  return res.data;
};

// ✔ Delete a user
export const deleteUser = async (id) => {
  const res = await api.delete(`/users/${id}`);
  return res.data;
};
