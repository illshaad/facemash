import Axios from "axios";
import { CatType } from "../types/cat";

const getRandomCats = async (): Promise<CatType[]> => {
  try {
    const response = await Axios.get(
      "https://facemash-server-fkgyedoyn-illshaad.vercel.app/random"
    );
    return response.data;
  } catch (error) {
    console.error("An error occurred while retrieving random cats", error);
    throw new Error("Unable to retrieve random cats");
  }
};

const addVote = async (id: string): Promise<string> => {
  try {
    const url = `https://facemash-server-fkgyedoyn-illshaad.vercel.app/vote?catId=${id}`;
    const response = await Axios.post(url);
    return response.data;
  } catch (error) {
    console.error("An error occurred while adding the vote:", error);
    throw new Error("Unable to add vote");
  }
};

export { getRandomCats, addVote };
