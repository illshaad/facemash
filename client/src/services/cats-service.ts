import Axios from "axios";

const getRandomCats = async () => {
  const response = await Axios.get("http://localhost:3000/random");
  return response.data;
};

const addVote = async (id: string) => {
  const url = `http://localhost:3000/vote?catId=${id}`;
  const response = await Axios.post(url);
  return response.data;
};

export { getRandomCats, addVote };
