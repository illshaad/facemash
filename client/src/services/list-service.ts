import Axios from "axios";
import { CatType } from "../types/cat";

const getCats = async (): Promise<CatType[]> => {
  const response = await Axios.get("http://localhost:3000/cats");
  return response.data;
};

export { getCats };
