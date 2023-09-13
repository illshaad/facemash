import Axios from "axios";
import { CatType } from "../types/cat";

const getCats = async (order: string): Promise<CatType[]> => {
  const response = await Axios.get(`http://localhost:3000/cats?sort=${order}`);
  return response.data;
};

export { getCats };
