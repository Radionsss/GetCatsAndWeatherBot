import { config } from "./config.js";
import axios from "axios";

export const getCat = async () => {
  const response = await axios.get(config.catUrl);
  return response?.data[0].url;
};
