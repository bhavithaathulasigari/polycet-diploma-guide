// src/utils/auth.js

export const login = (email) => {
  localStorage.setItem("user", JSON.stringify({ email }));
};

export const isAuthenticated = () => {
  return !!localStorage.getItem("user");
};

export const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
