import Axios from "axios";
import { CatType } from "../types/cat";

const getCats = async (order: string): Promise<CatType[]> => {
  try {
    const response = await Axios.get(
      `https://facemash-server-fkgyedoyn-illshaad.vercel.app/cats?sort=${order}`
    );
    return response.data;
  } catch (error) {
    console.error("An error occurred while retrieving cats:", error);
    throw new Error("Unable to recover cats");
  }
};

export { getCats };
