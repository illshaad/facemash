import Axios from "axios";

const getCats = async () => {
  const response = await Axios.get("http://localhost:3000/cats");
  return response.data;
};

export { getCats };
