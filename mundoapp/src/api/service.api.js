import axios from "axios";

export const createService = async (data) =>
  await axios.post(`http://localhost:3000/service`, data);

export const getServices = async () =>
  await axios.get("http://localhost:3000/service");
