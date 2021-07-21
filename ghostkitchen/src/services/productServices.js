import axios from "axios";

const apiClient = axios.create({
  baseURL: `https://my-json-server.typicode.com/umangcodes/Blog1`,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  async getproducts() {
    const response = await apiClient.get("/products");
    console.log("service");
    console.log(response);
    return response.data;
  },
};
