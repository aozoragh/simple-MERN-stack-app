import axios from "axios";

export const getAllData = async () => {
  const res = await axios.get("/all");
  return res.data;
};
