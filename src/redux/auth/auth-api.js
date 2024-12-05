import axios from "../../axios/axios";

export async function fetchAuth(data) {
  const response = await axios.post("/users/register", data);
  return response;
}

export async function fetchSignIn(data) {
  const response = await axios.post("/users/login", data);
  return response;
}

export async function fetchUpdateUserData(data) {
  const response = await axios.patch("/users/avatars", data);
  return response;
}
