import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://eternista.github.io/JSON-SERVER/db.json",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false,
});

export const getTestDate = async () => {
  try {
    const url = "";
    const response = await apiClient.get(url);
    console.log(response.data);
    return response.data;
  } catch (error) {
    //ERROR HANDLING
    console.log(error);
  }
};
