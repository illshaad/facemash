import { CatType } from "../types/cat";

export const nextCats: (
  currentIndex: number,
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>,
  catsList: CatType[] | CatType[][]
) => void = (currentIndex, setCurrentIndex, catsList) => {
  const newIndex = currentIndex + 1;
  if (catsList && newIndex >= catsList.length) {
    setCurrentIndex(0);
  } else {
    setCurrentIndex(newIndex);
  }
};

export const prevCats: (
  currentIndex: number,
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>,
  catsList: CatType[] | CatType[][]
) => void = (currentIndex, setCurrentIndex, catsList) => {
  const newIndex = currentIndex - 1;
  if (catsList && newIndex < 0) {
    setCurrentIndex(catsList.length - 1);
  } else {
    setCurrentIndex(newIndex);
  }
};

export const slide = (data: CatType[]) => {
  const chunks = [];
  for (let i = 0; i < data.length; i += 4) {
    chunks.push(data.slice(i, i + 4));
  }
  return chunks;
};
